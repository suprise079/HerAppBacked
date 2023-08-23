const express = require("express");
const router = express.Router();

const {
  getAllExcercises,
  createExcercise,
  updateExcercise,
  deleteExcercise,
} = require("../controllers/ExcercisesController.js");

router.get("/", getAllExcercises);
router.post("/", createExcercise);
router.put("/:id", updateExcercise);
router.delete("/:id", deleteExcercise);

module.exports = router;
