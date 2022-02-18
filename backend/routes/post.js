const express = require("express");

const router = express.Router();

const controllersPost = require("../controllers/post");
const auth = require("../middelware/auth");
const multer = require("../middelware/multer");

router.post("/postCreate", multer, controllersPost.postCreate);
router.get("/getAllpost", controllersPost.getAllPost);
router.get("/getOnePost/:id", controllersPost.getOnePost);
router.put("/updatePost/:id",auth, controllersPost.updatePost);
router.delete("/deletePost/:id",auth, controllersPost.deletePost);



module.exports = router;