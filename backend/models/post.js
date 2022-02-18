const {DataTypes} = require("sequelize");
const sequelizeDb = require("../util/database");
const modelsUsers = require("../models/users");

const post = sequelizeDb.define("post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
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
})


module.exports = post;