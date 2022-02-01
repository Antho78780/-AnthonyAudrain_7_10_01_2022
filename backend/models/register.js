const sequelize = require("sequelize");
const Sequelize = require("../database");

const Users = Sequelize.define("users", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    prenom: {
        type: sequelize.STRING,
        allowNull: false,
    },
    nom: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,

    },
    mdp: {
        type: sequelize.STRING,
        allowNull: false,
    },

});

Users.sync()

module.exports = Users;
    