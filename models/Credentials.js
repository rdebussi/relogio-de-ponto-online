const Sequelize = require("sequelize")
const connection = require("../database/connection")

const Credential = connection.define('credentials', {
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Credential