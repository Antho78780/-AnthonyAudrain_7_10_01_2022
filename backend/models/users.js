
const {DataTypes} = require("sequelize");
const sequelizeDb = require("../util/database");
const modelsPost = require("../models/post");
const modelsComments = require("../models/comments");

const users = sequelizeDb.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    mdp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    images: {
        type : DataTypes.STRING
    }

});

module.exports = users;
    