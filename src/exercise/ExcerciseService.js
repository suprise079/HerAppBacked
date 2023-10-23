const Excercises = require("./Excercises");

exports.getAllExcercises = async () => {
  return await Excercises.find();
};

exports.createExcercise = async (excercise_Instructions) => {
  return await Excercises.create(excercise_Instructions);
};
exports.getExcerciseById = async (id) => {
  return await Excercises.findById(id);
};

exports.updateExcercise = async (id, excercise_Instructions) => {
  return await Excercises.findByIdAndUpdate(id, excercise_Instructions);
};

exports.deleteExcercise = async (id) => {
  return await Excercises.findByIdAndDelete(id);
};



