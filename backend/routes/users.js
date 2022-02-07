const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");

router.post("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);

module.exports = router;