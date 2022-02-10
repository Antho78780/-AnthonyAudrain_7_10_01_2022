const express = require("express");

const router = express.Router();

const controllersSujet = require("../controllers/sujet");
const auth = require("../middelware/auth");

router.post("/sujetCreate", controllersSujet.sujetCreate);
router.get("/sujetCreate", controllersSujet.sujetCreate);
router.get("/getAllSujet", controllersSujet.getAllSujet);
router.put("/likes", controllersSujet.postLikes)



module.exports = router;