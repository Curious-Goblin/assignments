const express = require("express")
const router= express.Router()
const SurveyController = require("../controllers/surveyController")

const surveyController = require("../controllers/surveyController");

router.get("/",surveyController.getAllSurveys);
router.get("/:id",surveyController.getAllSurveysById);
router.post("/",surveyController.createSurvey);
router.put("/:id",surveyController.updateSurvey);
router.delete("/:id",surveyController.deleteSurvey);

module.exports=router