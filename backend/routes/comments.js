const express = require("express");

const router = express.Router();

const controllersComments = require("../controllers/comments");

router.post("/createComment/:id", controllersComments.createComment);
router.delete("/deleteComment/:id", controllersComments.deleteComment)
router.get("/getAllComments/:id", controllersComments.getAllComments);


module.exports = router;