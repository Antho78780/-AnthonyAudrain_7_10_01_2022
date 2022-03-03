
const modelsPost = require("../models/post");

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
}


