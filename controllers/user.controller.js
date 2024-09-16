const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    removeUser,
} = require('../services/user.services')

const userValidation = require('../validator/user.validation');

exports.create = async (req, res) => {
    try {
        await userValidation.validate(req.body)
        const user = await createUser(req.body)
        res.status(200).json(user)
    } catch(e) {
        res.status(400).json({erro: e.message})
    }
}

exports.get = async(_, res) => {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    }   catch(e){
        res.status(400).json({error: e.message})
    }
}


exports.getById = async(req, res) => {
    try {
        const user = await getUserById(req.params)
        res.status(200).json(user)
    }   catch(e) {
        res.status(400).json({error: e.message})
    }
}

exports.update = async(req, res) => {
    try {
        const user = await updateUser(req.params, req.body)
        res.status(200).json(user)
    }   catch(e){
        res.status(400).json({error: e.message})
    }
}

exports.remove = async(req, res) => {
    try {
        const user = await removeUser(req.params)
        res.status(200).json(user)
    }   catch(e) {
        res.status(400).json({error : e.message})
    }
}