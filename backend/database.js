
const sequelize = require("sequelize");

const Sequelize = new sequelize(`${process.env.dbName}`,`${process.env.usersNameDb}`,`${process.env.passwordDb}`, {
    dialect : "mysql",
    host : "localhost"
});

module.exports = Sequelize;