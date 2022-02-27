const {DataTypes} = require("sequelize");
const sequelizeDb = require("../util/database");

const comments = sequelizeDb.define("comments", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    userIdComment: {
        type: DataTypes.INTEGER
    },
    idPost: {
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
})


module.exports = comments;