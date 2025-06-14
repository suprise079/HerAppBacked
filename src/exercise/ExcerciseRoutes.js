const express = require("express");
const router = express.Router();

const { getAllExcercises, createExcercise, updateExcercise, deleteExcercise, getProgress, updateProgress } = require("./ExcercisesController.js");

router.route("/").get(getAllExcercises)
// .post(createExcercise).put(updateExcercise).delete(deleteExcercise); //admin routes
router.route("/progress").get(getProgress).post(updateProgress);

module.exports = router;
