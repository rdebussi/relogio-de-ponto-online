const Sequelize = require("sequelize");
const connection = require('../database/connection');

const Class = connection.define('class', {
    occupation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    workload: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

})

module.exports = Class
