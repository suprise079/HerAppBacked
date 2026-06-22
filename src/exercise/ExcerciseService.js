const ExcerciseTracking = require("./ExcerciseTracking");
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

// =====================================+* Excercise tracking  *+=======================================================================================================

exports.getExcerciseProgress = async (userId) => {
  return await ExcerciseTracking.findOne({ userId }, { excercises: 1 });
};

exports.updateExcerciseProgress = async (userId, excerciseId, progress) => {
  let isUserExisting = await ExcerciseTracking.findOne({ userId });
  let isExcerciseProgress = await ExcerciseTracking.findOne({ userId, "excercises.excerciseId": excerciseId });

  if (isUserExisting !== null && isExcerciseProgress !== null) {
    // if there is existing progress for this excercise, update the progress array
    return await ExcerciseTracking.findOneAndUpdate(
      { userId, "excercises.excerciseId": excerciseId },
      { $set: { "excercises.$.progress": [...progress] } }
    );
  } else if (isUserExisting !== null && isExcerciseProgress === null) {
    // if there is no existing progress for this excercise, create a new entry
    return await ExcerciseTracking.findOneAndUpdate(
      { userId },
      { $push: { excercises: { excerciseId, progress } } }
    );
  } else {
    // first time user
    return await ExcerciseTracking.create({ userId, excercises: [{ excerciseId, progress }] });
  }
};

// =====================================+* Excercise Activity tracking  *+=======================================================================================================

