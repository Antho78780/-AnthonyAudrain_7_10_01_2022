
const {Sequelize}  = require("sequelize");

const sequelize = new Sequelize(`${process.env.dbName}`,`${process.env.usersNameDb}`,`${process.env.passwordDb}`, {
    dialect : "mysql",
    host : "localhost"
});

module.exports = sequelize;