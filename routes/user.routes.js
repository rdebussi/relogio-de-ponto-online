const {
    create,
    get,
    getById,
    update,
    remove,
} = require('../controllers/user.controller')

exports.userRoutes = (app) => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user/:id", getById)
    app.patch("/user/:id", update)
    app.delete("/user/:id", remove)
}