const Sequelize = require("sequelize")
const connection = require("../database/connection")
const Credential = require("./Credentials");
const Class = require("./Class");

const User = connection.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    profilePic: {
        type: Sequelize.STRING,
        allowNull: false
    },
    credentiableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

})

Credential.hasOne(User, { foreignKey: 'credentiableId' });
User.belongsTo(Credential, { foreignKey: 'credentiableId' });

Class.hasMany(User, {foreignKey: 'classId'})
User.belongsTo(Class, {foreignKey: 'classId'})





module.exports = User