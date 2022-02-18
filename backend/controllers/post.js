
const modelsPost = require("../models/post");
const modelsUsers = require("../models/users");


exports.postCreate = (req, res) => {
	console.log(req.body);
	modelsPost.create({
		userId : req.body.userId,
		titre: req.body.titre,
		sujet: req.body.sujet,
	})
	.then((create) => {
		if(create) {
			res.status(201).json(create);
		}
		else {
			res.status(400).json({error: "Sujet non créer"})
		}
	})
}
exports.getAllPost = (req, res) => {
	modelsPost.findAll()
	.then((sujet) => {
		res.status(200).json(sujet)
	})
	
}
exports.getOnePost = (req, res) => {
	modelsPost.findByPk(req.params.id)
	.then((post) => {
		res.status(200).json(post)
	})
}

exports.updatePost = (req, res) => {
	modelsPost.findByPk(req.params.id)
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

exports.deletePost = (req, res) => {
	modelsPost.destroy({
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


