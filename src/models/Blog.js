const mongoose = require("mongoose");
const Schema = mongoose.Schema;


module.exports = mongoose.model("Blog",new Schema({
  title: String,
  content: String,
  author: String,
  image: String,
  category: String,
  Likes: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
}));
