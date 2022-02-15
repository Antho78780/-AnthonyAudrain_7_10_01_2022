
const modelsSujet = require("../models/sujet");
const modelsUsers = require("../models/users");

exports.sujetCreate = (req, res) => {
	console.log(req.body);
	modelsSujet.create({
		userId : req.body.userIdSujet,
		titre: req.body.titre,
		sujet: req.body.sujet,
		likes: 0,
		disLikes: 0,
	})
	res.status(201).json({messgae: "sujet créer"});
}
exports.getAllSujet = (req, res) => {
	modelsSujet.findAll()
	.then((sujet) => {
		res.status(200).json(sujet);
	})
	
}


exports.postLikes = (req,res) => {
	console.log(req.body);
}

