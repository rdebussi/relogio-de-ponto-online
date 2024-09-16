const {
    create,
    get,
    getById,
    getAllById,
    update,
    remove

} = require('../controllers/class.controller')

exports.classRoutes = (app) => {
    app.post("/class", create);
    app.get("/class", get);
    app.get("/class/:id", getById);
    app.get("/class/:id/employees", getAllById);
    app.patch("/class/:id", update)
    app.delete("/class/:id", remove)
}

