const modelUsers = require("../models/register");
const bcrypt = require("bcrypt");


exports.login =  (req, res) => {
   res.send("login");
   console.log(req.body);
}
exports.register = (req, res) => {
    console.log("Enregistration Compte utilisateur");
    console.log("Compte enregistré")
    console.log(req.body);
    bcrypt.hash(req.body[3], 5)
    .then((hash) => {
        modelUsers.create({
            prenom: req.body[0],
            nom: req.body[1],
            email: req.body[2], 
            mdp: hash,
        })
    })
}