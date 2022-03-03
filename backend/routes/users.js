const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");


router.post("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);
router.delete("/deleteUser/:id", controllersUsers.deleteUser);
router.get("/getOneUser/:id", controllersUsers.getOneUser);


module.exports = router;