const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Recipes",
  new Schema({
    recipeName: {
      type: String,
      required: true,
      unique: true,
    }, //
    image: String, //
    source: String, //
    serving: String, //
    description: String,
    videoSource: String, //
    videoLink: String, //
    calories: Number, //
    allergies: [],
    ingredients: [],  //
    preparation: [],
    dietLabels: [],  //
    healthLabels: [],  //
    mealType: [],
    nutrients: [],
    displayIngredients: [],  //
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
