const Sequelize = require("sequelize");
const connection = require('../database/connection');
const Class = require("../models/Class");
const User = require("../models/User")

const History = connection.define('history', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Adicionando referência para User
            model: 'users', 
            key: 'id'
        }
    },
    classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Adicionando referência para Class
            model: 'classes',
            key: 'id'
        }
    },
    ipAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    entry: {
        type: Sequelize.DATE,
        allowNull: false
    },
    entryLunch: {
        type: Sequelize.DATE,
        allowNull: true
    },
    exitLunch: {
        type: Sequelize.DATE,
        allowNull: true
    },
    exit: {
        type: Sequelize.DATE,
        allowNull: true
    },
    hoursWorked: {
        type: Sequelize.INTEGER, // Mudando para INTEGER para representar duração
        allowNull: true
    },
    annualLeave: {
        type: Sequelize.INTEGER, // Mudando para INTEGER para representar duração
        allowNull: true
    }}
    , {
        timestamps: false,
        freezeTableName: true // Isto desabilita a pluralização
    });

User.hasMany(History, {foreignKey: 'userId'})
Class.hasMany(History, {foreignKey: 'classId'})
History.belongsTo(User, {foreignKey: 'userId'})
History.belongsTo(Class, {foreignKey: 'classId'})


/* {
    timestamps: true // Adicionando createdAt e updatedAt automáticos
}*/
module.exports = History;
