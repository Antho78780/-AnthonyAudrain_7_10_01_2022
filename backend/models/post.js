const {DataTypes} = require("sequelize");
const sequelizeDb = require("../util/database");

const post = sequelizeDb.define("post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER, 
    },
    image: {
        type : DataTypes.STRING,
    },
    titre: {
        type: DataTypes.STRING,
    },
    sujet: {
        type: DataTypes.STRING,
    },
})
module.exports = post;