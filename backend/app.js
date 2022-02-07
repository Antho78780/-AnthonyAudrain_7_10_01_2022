
const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

////Utilisation du CORS/////
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
const Sequelize = require("./database");

const modelUsers = require("./models/users");
const modelsArticle = require("./models/article");

modelUsers.hasMany(modelsArticle);

Sequelize
.sync()
.then(() => {
    console.log("Connexion à la base de donnée réussie");
})
.catch(() => {
    console.log("Connexion à la base de donnée echouée")
})



const routeUsers = require("./routes/users");

app.use("/", routeUsers);


module.exports = app;
