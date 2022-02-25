const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");
const auth = require("../middelware/auth");


router.post("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);
router.delete("/deleteUsers/:id", controllersUsers.deleteUsers);
router.get("/getAllUsers", controllersUsers.getAllUsers);
router.get("/getOneUsers/:id", controllersUsers.getOneUsers);


module.exports = router;