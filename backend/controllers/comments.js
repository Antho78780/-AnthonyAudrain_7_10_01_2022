const modelsComments = require("../models/comments");
const modelsUsers = require("../models/users");


exports.createComments = (req,res) => {
    modelsComments.create({
        postId: req.params.id,
        comments: req.body.comments
    })
    .then((create) => {
        console.log(create);
        res.status(201).json(create);
    })
}

exports.getAllComments = (req, res) => {
    modelsComments.findAll()
    .then((comments) => {
        res.status(200).json(comments);
    })
}