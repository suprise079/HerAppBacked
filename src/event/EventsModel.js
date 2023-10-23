const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Events",
  new Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    image: String,
    location: String,
    date: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
