const Class = require('../models/Class')
const User = require('../models/User')

exports.createClass = async (data) => {
    try {
        const newClass = await Class.create({
            occupation: data.occupation,
            salary: data.salary,
            workload: data.workload
        })
        return newClass
    }   catch(e) {
        throw e
    }
}   

exports.getClass = async () => {
    try {
        const classes = await Class.findAll();
        return classes
    }   catch(e){
        throw e
    }
}

exports.getClassById = async ({id}) => {
    try {
        const clas = await Class.findByPk(id)
        if(!clas){
            throw new Error ("class not found")
        }
        return clas
    }   catch(e){
        throw e
    }
}

exports.getAllEmployeesById = async ({id}) => {
    try{
        const employees = await User.findAll({where: {classId: id}, 
            include:[{
            model: Class,
            attibutes: ['occupation', 'salary', 'workload']
            }]
        })
        return employees
    }   catch(e){
        throw e
    }
}

exports.updateClass = async ({id}, data) => {
    try{
        const existingClass = await Class.findByPk(id)
        if(!existingClass){
            throw new Error ('class not found')
        }
        const updated = Class.update(data, {where: {id}})
        return updated
    }   catch(e){
        throw e
    }
}

exports.removeClass = async ({id}) => {
    try {
        const existingClass = await Class.findByPk(id)
        if(!existingClass){
            throw new Error ('class not found')
        }
        const classRemoved = await Class.destroy({where: {id}})
        return classRemoved
    }   catch(e){
        throw e
    }
}