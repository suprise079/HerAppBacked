const express = require("express");
const router = express.Router();
const {
  getAllExcercise_Instructions,
  createExcercise_Instruction,
  getExcercise_InstructionById,
  updateExcercise_Instruction,
  deleteExcercise_Instruction,
  getExcercise_InstructionByCategory,
} = require("../controllers/Excercise_InstructionsController.js");

router.route("/").get(getAllExcercise_Instructions).post(createExcercise_Instruction);
router.route("/:id").get(getExcercise_InstructionById).put(updateExcercise_Instruction).delete(deleteExcercise_Instruction);
router.route("/category/:category").get(getExcercise_InstructionByCategory);

module.exports = router;
