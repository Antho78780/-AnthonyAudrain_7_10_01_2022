const sequelize = require("sequelize");
const Sequelize = require("../database");

const sujet = Sequelize.define("sujet", {
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
    titre: {
        type: sequelize.STRING,
        allowNull: false,
    },
    sujet: {
        type: sequelize.STRING,
        allowNull: false,
    },
    likes: {
        type: sequelize.INTEGER,
        defaultValue: 0,
    },
    disLikes: {
        type: sequelize.INTEGER,
        defaultValue: 0,
    },
})


module.exports = sujet;