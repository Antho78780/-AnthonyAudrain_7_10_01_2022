const express = require("express");

const router = express.Router();

const controllersSujet = require("../controllers/sujet");
const auth = require("../middelware/auth");
const multer = require("../middelware/multer");

router.post("/sujetCreate", multer, controllersSujet.sujetCreate);
router.get("/getAllSujet", controllersSujet.getAllSujet);
router.put("/updateSujet/:id", controllersSujet.updateSujet);
router.delete("/deleteSujet/:id", controllersSujet.deleteSujet)
router.put("/likes/:id", controllersSujet.sujetLikes);
router.put("/disLikes/:id", controllersSujet.sujetDisLikes);
router.patch("/comments/:id", controllersSujet.commentsSujet);



module.exports = router;