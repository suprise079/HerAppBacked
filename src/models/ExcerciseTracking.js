const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "ExcerciseTracking",
  new Schema({
    userId: String,
    excercises: [
      {
        excerciseId: String,
        progress: [],
      },
    ],
  })
);
