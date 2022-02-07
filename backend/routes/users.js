const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");
const auth = require("../middelware/auth")

router.post("/login", controllersUsers.login);
router.get("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);
router.get("/register", controllersUsers.register);
router.post("/login/article", controllersUsers.article);
router.get("/login/article", controllersUsers.article);

module.exports = router;