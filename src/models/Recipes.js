const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Recipes",
  new Schema({
    approved: {
      type: Boolean,
      default: false,
    },
    calories: Number,
    category: String,
    description: String,
    image: String,
    ingredients: {},
    preparation: {},
    recipeName: String,
    time: String,
    foodType: String,
    userId: String,
  })
);
