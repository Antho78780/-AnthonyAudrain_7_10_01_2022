const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");

router.post("/login", controllersUsers.login);
router.get("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);
router.get("/register", controllersUsers.register);

module.exports = router;