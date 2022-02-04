const modelUsers = require("../models/users");
const bcrypt = require("bcrypt");


exports.login =  (req, res) => {
    console.log(req.body)
   modelUsers.findAll()
   .then((users) => {
       for(let i =0; i < users.length;i++) {
           if(req.body.emailLogin  == users[i].email) {
               console.log("email reconnu")
               bcrypt.compare(req.body.passwordLogin, users[i].mdp)
               .then((control) => {
                   if(control) {
                       console.log("mot de passe bon");
                       res.status(200).json({message : "compte connecté"})
                   }
                   else {
                       console.log("mot de passe incorrect");
                       res.status(400).json({message : "mot de passe incorrect"})
                   }
               })
            }
        }
     })

}
exports.register = (req, res) => {
    console.log("Compte enregistré")
    console.log(req.body);
    bcrypt.hash(req.body.passwordRegister, 5)
    .then((hash) => {
        modelUsers.create({
            prenom: req.body.firstName,
            nom: req.body.name,
            email: req.body.emailRegister, 
            mdp: hash,
        })
    })
}
exports.deleteCompte = (req,res) => {
   modelUsers.findAll()
   .then((users) => {
       console.log(users)
   })
}
