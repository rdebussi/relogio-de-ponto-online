const { classRoutes } = require('./class.routes');
const { userRoutes } = require('./user.routes')

module.exports = (app) => {
    userRoutes(app);
    classRoutes(app);
}