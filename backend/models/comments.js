const {DataTypes} = require("sequelize");
const sequelizeDb = require("../util/database");

const comments = sequelizeDb.define("comments", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    idPost: {
        type: DataTypes.INTEGER,
    },
    comments: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
})


module.exports = comments;