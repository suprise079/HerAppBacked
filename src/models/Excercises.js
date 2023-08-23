const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Excercises",
  new Schema({
    Name: String,
    Image: String,
    time: String,
    workouts: [
      {
        name: String,
        illustration: String,
        image: String,
        time: String,
        description: String,
      },
    ],
  })
);
