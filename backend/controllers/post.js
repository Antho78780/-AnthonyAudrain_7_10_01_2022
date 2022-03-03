
const modelsPost = require("../models/post");
const modelsUser = require("../models/users");

exports.postCreate = (req, res) => {
	modelsPost.create({
        userId: req.body.userId,
        titre: req.body.titre,
        sujet: req.body.sujet,
   })
   .then((post) => {
       res.status(200).json(post);
   })
}

exports.getAllPost = (req, res) => {
	modelsPost.findAll()
	.then((post) => {
		res.status(200).json(post)
	})
	
}
exports.getOnePost = (req, res) => {
	modelsPost.findOne({
		where: {id : req.params.id}
	})
	.then((post) => {
		res.status(200).json(post)
	})
	
}

exports.deletePost = (req, res) => {
	if(req.body.userIdPost){
		console.log(req.body)
		modelsPost.destroy({
			where: {id: req.params.id, userId: req.body.userIdPost}
		})
		.then((postDelete) => {
			if(postDelete) {
				res.status(200).json({message: "Post supprimé"});
			}
			else {
				res.status(401).json({error: "Post non supprimé"})
			}
		})
		.catch(() => {
			res.status(401).json({error: "UserIdPost non reçu"})
		})
	}
	else if(req.body.isAdmin) {
		console.log(req.body)
		modelsPost.destroy({
			where: {id: req.params.id}
		})
		.then((postDeleteAdmin) => {
			if(postDeleteAdmin) {
				res.status(200).json({message: "Post supprimé par l'admin"})
			}
			else {
				res.status(401).json({message: "Post non supprimé"})
			}
		})
	}
}


