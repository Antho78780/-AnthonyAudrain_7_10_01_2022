
const modelsComments = require("../models/comments");
const modelsPost = require("../models/post");
const modelsUsers = require("../models/users");

exports.createComments = (req,res) => {
    console.log(req.body)
    modelsComments.create({
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
        modelsComments.findAll({
            where: {idPost: post.id}
        })
        .then((comment) => {
            res.status(200).json(comment);
        })
    })
    
}
exports.deleteComments = (req, res) => {
    console.log(req.params);
    modelsComments.destroy({
        where: {id: req.params.id}
    })
    .then((destroyComment) => {
        console.log(destroyComment)
        res.status(200).json(destroyComment);
    })
}