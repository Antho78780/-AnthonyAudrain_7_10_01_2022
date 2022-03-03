
const modelsComment = require("../models/comments");
const modelsPost = require("../models/post");

exports.createComment = (req,res) => {
    modelsComment.create({
        userIdComment: req.params.id,
        idPost: req.body.postId,
        comment: req.body.comment
    })
    .then((comment) => {
        res.status(201).json(comment)
    })
}
exports.getAllComments = (req, res) => {
    modelsPost.findOne({
        where: {id: req.params.id}
    })
    .then((post) => {
        modelsComment.findAll({
            where: {idPost: post.id}
        })
        .then((comment) => {
            res.status(200).json(comment);
        })
    })
    
}
exports.deleteComment = (req, res) => {
    if(req.body.userIdComment) {
        modelsComment.destroy({
            where: {id: req.params.id, userIdComment: req.body.userIdComment}
        })
        .then((destroyComment) => {
            if(destroyComment) {
                res.status(200).json({message: "Commentaire supprimé"})
            }
            else {
                res.status(401).json({error: "Commentaire non supprimé"})
            }
        })
        .catch(() => {
            res.status(400).json({error: "UserIdComment non reçu"})
        })
    }
    else if(req.body.isAdmin){
        modelsComment.destroy({
            where: {id: req.params.id}
        })
        .then((adminDeleteComment) => {
            if(adminDeleteComment) {
                res.status(200).json({message: "Commentaire supprimé par l'admin"})
            }
            else {
                res.status(400).json({error: "Commentaire non supprimé par l'admin"})
            }
        })
    }
}
