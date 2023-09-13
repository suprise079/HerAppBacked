const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Blog",
  new Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: String,
    author: String,
    authorImage: String,
    image: String,
    category: String,
    likes: Number,
    time: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
