const {DataTypes} = require("sequelize");
const sequelizeDB = require("../database");

const sujet = sequelizeDB.define("sujet", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    images: {
        type : DataTypes.STRING,
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sujet: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    disLikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
})


module.exports = sujet;