
const express = require("express");

const app = express();
const path = require("path");

app.use(express.json());

require("dotenv").config();

////Utilisation du CORS/////
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
const SequelizeDb = require("./util/database");
const modelsUsers = require("./models/users");
const modelsPost = require("./models/post");

try {
    modelsUsers.hasMany(modelsPost);
    modelsPost.belongsTo(modelsUsers);
    SequelizeDb.authenticate();
    SequelizeDb.sync();
    console.log("Connexion à la base de donnée réussie");
}
catch(error) {
    console.log("Connexion à la base de donnée echouée")

}
const routeUsers = require("./routes/users");
const routePost = require("./routes/post");
const routeComments = require("./routes/comments");


app.use("/users/", routeUsers);
app.use("/post/", routePost);
app.use("/comments/", routeComments);


module.exports = app;
