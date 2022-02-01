const sequelize = require("sequelize");

const Sequelize = new sequelize("groupomania", "root", "root", {
    dialect : "mysql",
    host : "localhost"
});

module.exports = Sequelize;