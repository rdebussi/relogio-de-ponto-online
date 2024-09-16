const User = require('../models/User')
const Credential = require('../models/Credentials')
const connection = require('../database/connection')

exports.createUser = async (data) => {
        let transaction
        try {
            transaction = await connection.transaction();
            const existingCredential = await Credential.findOne({ where: { cpf: data.cpf } })
            if(existingCredential){
                throw new Error('a user with this cpf already exists')
            }
            const newCredential = await Credential.create({
                cpf: data.cpf,
                password: data.password,
            }, { transaction });
            const newUser = await User.create({
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                birthday: data.birthday,
                credentiableId: newCredential.id,
                classId: data.classId,
                profilePic: data.profilePic
            }, { transaction });

            await transaction.commit();

            return newUser;
        } catch (e) {
            throw e;
        }
}

exports.getUsers = async () => {
    try {
        const users = await User.findAll()
        return users
    } catch(e) {
        throw e
    }
}

exports.getUserById = async ({id}) => {
    try {
        const user = await User.findByPk(id)
        if(!user){
            throw new Error('user not found')
        }
        return user
    }   catch(e){
        throw e
    }
}

exports.updateUser = async ({id}, data) => {
    try{
        const existingUser = await User.findByPk(id)
        if(!existingUser){
            throw new Error('user not found')
        }
        const user = await User.update(data, {where: {id}})
        return user
    }   catch(e){
        throw e
    }
}

exports.removeUser = async ({id}) => {
    try {
        const existingUser = await User.findByPk(id)
        if(!existingUser){
            throw new Error('user not found')
        }
        const rmUser = await User.destroy({where: {id}})
        await Credential.destroy({where: {id : existingUser.credentiableId}})
        return rmUser
    }   catch(e){
        throw e
    }
}

