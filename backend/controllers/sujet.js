
const modelsSujet = require("../models/sujet");
const modelsUsers = require("../models/users");


exports.sujetCreate = (req, res) => {
	console.log(req.body);
	modelsSujet.create({
		userId : req.body.userIdSujet,
		titre: req.body.titre,
		sujet: req.body.sujet,
		images: req.body.image,
		likes: 0,
		disLikes: 0,
	})
	.then((create) => {
		if(create) {
			console.log(create)
			res.status(201).json({message: "Sujet créer"})
		}
		else {
			res.status(400).json({error: "Sujet non créer"})
		}
	})
}
exports.getAllSujet = (req, res) => {
	modelsSujet.findAll()
	.then((sujet) => {
		res.status(200).json(sujet)
	})
}

exports.updateSujet = (req, res) => {
	modelsSujet.findByPk(req.params.id)
	.then((sujet) => {
		console.log(sujet)
		sujet.set({
			sujet: req.body.sujet
		})
		sujet.save()
		.then(() => {
			res.status(200).json({message: "Sujet modifié"});
		})
	})
}

exports.deleteSujet = (req, res) => {
	modelsSujet.destroy({
		where: {id: req.params.id}
	})
	.then((sujetDelete) => {
		if(sujetDelete) {
			res.status(200).json({message: "Sujet supprimé"})
		}
		else {
			res.status(400).json({error : "Sujet non supprimé"})
		}
	})

}
exports.commentsSujet = (req, res) => {
}


exports.sujetLikes = (req,res) => {
	
}

exports.sujetDisLikes = (req, res) => {

}

