const { 
    createClass,
    getClass,
    getClassById,
    getAllEmployeesById,
    updateClass,
    removeClass
} = require('../services/class.services')

exports.create = async (req, res) => {
    try {
        const classes = await createClass(req.body)
        res.status(200).json(classes)
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

exports.get = async (_, res) => {
    try {
        const classes = await getClass()
        res.status(200).json(classes)
    } catch(e){
        res.status(400).json({error: e.message})
    }
}


exports.getById = async (req, res) => {
    try {
        const clas = await getClassById(req.params)
        res.status(200).json(clas)
    } catch(e){
        res.status(400).json({error: e.message})
    }
}

exports.getAllById = async (req, res) => {
    try{
        const employees = await getAllEmployeesById(req.params)
        res.status(200).json(employees)
    }   catch(e){
        res.status(400).json({error: e.message})
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await updateClass(req.params, req.body)
        res.status(200).json(updated)
    }   catch(e){
        res.status(400).json({error: e.message})
    }
}

exports.remove = async (req, res) => {
    try {   
        const removed = await removeClass(req.params)
        res.status(200).json(removed)
    }   catch(e){
        res.status(400).json({error: e.message})
    }
}