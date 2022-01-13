
const express = require("express");

const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://LABRADOR78:LABRADOR78@cluster0.qvmtp.mongodb.net/project2?retryWrites=true&w=majority",{
useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("connexion à mongoose réussi"))
.catch(() => console.log("connexion à mongoose échoué"))



module.exports = app;
