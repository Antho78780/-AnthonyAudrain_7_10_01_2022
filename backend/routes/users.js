const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");
const auth = require("../middelware/auth");
const multer = require("../middelware/multer");

router.post("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);
router.post("/addPhoto/:id",multer, controllersUsers.addPhoto);
router.delete("/deleteUsers/:id",auth, controllersUsers.deleteUsers);
router.get("/getAllUsers", controllersUsers.getAllUsers);
router.get("/getOneUsers/:id", controllersUsers.getOneUsers);


module.exports = router;