const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Recipes",
  new Schema({
    recipeName: String,
    userId: String,
    image: String,
    description: String,
    calories: Number,
    category: String,
    ingredients: {},
    preparation: {},
    time: String,
    foodType: String,
    images: [],
    rating: {
      type: Number,
      default: 0,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  })
);
