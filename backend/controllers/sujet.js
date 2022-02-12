const modelsSujet = require("../models/sujet");

exports.sujetCreate = (req, res) => {
	console.log(req.body);
	const createSujet = modelsSujet.build({
		titre: req.body.titre,
		sujet: req.body.sujet,
		prenom: req.body.prenomSujet,
		nom: req.body.nomSujet,
		email: req.body.emailSujet,
		userId: req.body.userIdSujet,
		likes: 0,
		disLikes: 0,
	})
	createSujet.save();
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
	modelsSujet.findOne({
		where: {id: req.body.id}
	})
	.then((sujet) => {
		res.status(200).json(sujet);
	})
}

