const Sequelize = require("sequelize")

const connection = new Sequelize('Ponto-Eletronico', 'root', 'guitarra21', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = connection;