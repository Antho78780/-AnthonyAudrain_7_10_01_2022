const express = require("express");

const router = express.Router();

const controllersPost = require("../controllers/post");
const auth = require("../middelware/auth");

router.post("/postCreate",auth,  controllersPost.postCreate);
router.get("/getAllpost", controllersPost.getAllPost);
router.get("/getOnePost/:id", controllersPost.getOnePost);
router.put("/updatePost/:id", controllersPost.updatePost);
router.delete("/deletePost/:id", controllersPost.deletePost);



module.exports = router;