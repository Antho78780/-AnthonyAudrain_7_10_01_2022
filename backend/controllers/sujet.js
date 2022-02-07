const modelsSujet = require("../models/sujet");

exports.sujetCreate = (req, res) => {
	res.status(201).json({messgae: "sujet créer"});
		modelsSujet.create({
			titre: req.body.titre,
			sujet: req.body.sujet,
		})
}
exports.getAllSujet = (req, res) => {
	modelsSujet.findAll()
	.then((sujet) => {
		res.status(200).json(sujet);
	})
}

exports.getOneSujet = (req, res) => {
	modelsSujet.findOne()
	.then((sujet) => {
		res.status(200).json(sujet);
	})
}
