const modelUsers = require("../models/users");
const modelsArticle = require("../models/article");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login =  (req, res) => {
   	modelUsers.findOne({
		where :{email : req.body.emailLogin}
	})
	.then((users) => {
		if(users){
			bcrypt.compare(req.body.passwordLogin, users.mdp)
			.then((control) => {
				if(control) {
					console.log(req.body)
					res.status(200).json({
						message: "mot de passe bon", 
						id: users.id, 
						token : jwt.sign(
							{id: users.id}, 
							process.env.key, 
							{expiresIn: "12h"}
						)
					});
				}
				else {
					res.status(400).json({error: "mot de passe incorrect"});
				}
			}) 
		}
		else {
			res.status(400).json({message: "email incorrect"});
		}
	});
}

exports.register = (req, res) => {
    bcrypt.hash(req.body.passwordRegister, 5)
    .then((hash) => {
        modelUsers.create({
            prenom: req.body.firstName,
            nom: req.body.name,
            email: req.body.emailRegister, 
            mdp: hash,
        })
		.then((create) => {
			if(create) {
				res.status(201).json({message: "compte enregistré"});
				console.log("Compte enregistré");
			}
		})
    });
}

exports.article = (req, res) => {
	console.log(req.body);
	res.status(201).json({messgae: "sujet créer"});
	modelUsers.findOne({
		where: {email : req.body.email}
	})
	.then((user) => {
		modelsArticle.create({
			titre: req.body.titre,
			sujet: req.body.sujet,
			userId: user.id
		})
	})
	
}
