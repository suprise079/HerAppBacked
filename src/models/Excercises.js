const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Excercises",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    time: Number,
    description: {
      type: String,
      unique: true,
    },
    workouts: [],
  })
);
