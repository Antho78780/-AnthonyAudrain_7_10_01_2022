
const modelsComments = require("../models/comments");
const modelsPost = require("../models/post");
const modelsUsers = require("../models/users");

exports.createComments = (req,res) => {
    console.log(req.params.id)
    modelsPost.findOne({
        where: {id: req.params.id}
    })
    .then((post) => {
        modelsComments.create({
            idPost: post.id,
            comments: req.body.comment
        })
        .then((comment) => {
            res.status(200).json(comment)
        })
    })
}
exports.getAllComments = (req, res) => {
    modelsPost.findOne({
        where: {id : req.params.id}
    })
    .then((post) => {
        console.log(post)
        modelsComments.findAll({
            where: {idPost: post.id}
        })
        .then((comments) => {
            res.status(200).json(comments)
        })
    })
}