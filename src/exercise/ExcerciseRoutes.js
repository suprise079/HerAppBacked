const express = require("express");
const router = express.Router();

const { getAllExcercises, createExcercise, updateExcercise, deleteExcercise, getProgress, updateProgress } = require("./ExcercisesController.js");

router.route("/").get(getAllExcercises).post(createExcercise);
router.route("/:id").put(updateExcercise).delete(deleteExcercise);
router.route("/progress/:userId").get(getProgress).post(updateProgress);

module.exports = router;
