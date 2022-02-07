const sequelize = require("sequelize");
const Sequelize = require("../database");

const article = Sequelize.define("article", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true,
    },
    titre: {
        type: sequelize.STRING,
        allowNull: false,
    },
    sujet: {
        type: sequelize.STRING,
        allowNull: false,
    },
})

module.exports = article;