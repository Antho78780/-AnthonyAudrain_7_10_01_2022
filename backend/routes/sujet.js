const express = require("express");

const router = express.Router();

const controllersSujet = require("../controllers/sujet");

router.post("/login/sujetCreate", controllersSujet.sujetCreate);
router.get("/login/sujetCreate", controllersSujet.sujetCreate);
router.get("/login/getAllSujet", controllersSujet.getAllSujet);
router.get("/login/getOneSujet", controllersSujet.getOneSujet)

module.exports = router;