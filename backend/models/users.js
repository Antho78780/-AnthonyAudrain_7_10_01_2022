
const {DataTypes} = require("sequelize");
const sequelizeDb = require("../util/database");

const users = sequelizeDb.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
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
    