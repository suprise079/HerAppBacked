const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Excercise_Instructions",
  new Schema({
    Category: String,
    Count: String,
    Description: String,
    Image: String,
    Name: String,
  })
);
