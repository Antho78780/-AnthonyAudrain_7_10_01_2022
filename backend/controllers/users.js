const modelUsers = require("../models/users");
const bcrypt = require("bcrypt");


exports.login =  (req, res) => {
   console.log(req.body)
   modelUsers.findAll()
   .then((users) => {
       for(let i =0; i < users.length;i++) {
           if(req.body[0]  == users[i].email) {
               bcrypt.compare(req.body[1], users[i].mdp)
               .then((control) => {
                   if(control) {
                       console.log("mot de passe bon");
                       res.status(200).json({message : "compte connecté"})
                   }
                   else {
                       console.log("mot de passe incorrect");
                       res.status(400).json({message : "impossible"})
                   }
               })
              
           }
           else {
               console.log("Email non reconnu")
           }
       }
   })

}
exports.register = (req, res) => {
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