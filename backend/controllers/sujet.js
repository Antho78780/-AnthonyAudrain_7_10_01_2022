const modelsSujet = require("../models/sujet");
const modelUsers = require("../models/users");

exports.sujetCreate = (req, res) => {
	console.log(req.body);
	modelsSujet.create({
		titre: req.body.titre,
		sujet: req.body.sujet,
		userId: req.body.userId,
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
	modelsSujet.findOne({
		where: {id: req.body.id}
	})
	.then((sujet) => {
		res.status(200).json(sujet);
	})
}

