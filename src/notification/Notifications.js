const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Notifications",
  new Schema({
    Time: Date,
    photo: String,
    text: String,
  })
);
