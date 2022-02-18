const express = require("express");

const router = express.Router();

const controllersComments = require("../controllers/comments");

router.post("/createComments/:id", controllersComments.createComments);
router.get("/getAllComments", controllersComments.getAllComments);

module.exports = router;