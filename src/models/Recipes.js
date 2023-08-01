const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Recipes",
  new Schema({
    Approved: Boolean,
    Calories: String,
    Category: String,
    Description: String,
    Image: String,
    Ingredients: [],
    Preparation: [],
    RecipeName: String,
    Time: String,
    Type: String,
    UserName: String,
    userId: String,
  })
);
