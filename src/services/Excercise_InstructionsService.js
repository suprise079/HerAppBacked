const Excercise_InstructionsModel = require("../models/Excercise_Instructions");

exports.getAllExcercise_Instructionss = async () => {
  return await Excercise_InstructionsModel.find();
};

exports.createExcercise_Instructions = async (excercise_Instructions) => {
  return await Excercise_InstructionsModel.create(excercise_Instructions);
};
exports.getExcercise_InstructionsById = async (id) => {
  return await Excercise_InstructionsModel.findById(id);
};

exports.updateExcercise_Instructions = async (id, excercise_Instructions) => {
  return await Excercise_InstructionsModel.findByIdAndUpdate(id, excercise_Instructions);
};

exports.deleteExcercise_Instructions = async (id) => {
  return await Excercise_InstructionsModel.findByIdAndDelete(id);
};

exports.getExcercise_InstructionsByCategory = async (category) => {
  category = category.toLowerCase();
  return await Excercise_InstructionsModel.find({ category: category });
};


