const express = require("express");

const router = express.Router();

const controllersUsers = require("../controllers/users");

router.post("/login", controllersUsers.login);
router.post("/register", controllersUsers.register);
router.delete("/deleteCompte", controllersUsers.deleteCompte);
router.get("/getOneProfil/:id", controllersUsers.getOneProfil);

module.exports = router;