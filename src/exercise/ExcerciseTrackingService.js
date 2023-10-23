const ExcerciseTracking = require("./ExcerciseTracking");

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
      { $push: { excercises: { excerciseId, progress: [progress] } } }
    );
  } else {
    // first time user
    return await ExcerciseTracking.create({ userId, excercises: [{ excerciseId, progress: [progress] }] });
  }
};
