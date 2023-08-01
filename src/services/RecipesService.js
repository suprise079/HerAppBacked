const RecipesModel = require("../models/Recipes");

exports.getAllRecipess = async () => {
  return await RecipesModel.find();
};

exports.createRecipes = async (recipes) => {
  return await RecipesModel.create(recipes);
};
exports.getRecipesById = async (id) => {
  return await RecipesModel.findById(id);
};

exports.updateRecipes = async (id, recipes) => {
  return await RecipesModel.findByIdAndUpdate(id, recipes);
};

exports.deleteRecipes = async (id) => {
  return await RecipesModel.findByIdAndDelete(id);
};

exports.getRecipesByCategory = async (category) => {
  category = category.toLowerCase();
  return await RecipesModel.find({ category: category });
};
