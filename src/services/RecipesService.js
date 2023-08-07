const RecipesModel = require("../models/Recipes");

exports.getAllRecipes = async () => {
  return await RecipesModel.find();
};

exports.createRecipe = async (recipes) => {
  return await RecipesModel.create(recipes);
};
exports.getRecipeById = async (id) => {
  return await RecipesModel.findById(id);
};

exports.updateRecipe = async (id, recipes) => {
  return await RecipesModel.findByIdAndUpdate(id, recipes);
};

exports.deleteRecipe = async (id) => {
  return await RecipesModel.findByIdAndDelete(id);
};

exports.getRecipeByCategory = async (category) => {
  // category = category.toLowerCase();
  return await RecipesModel.find({
    $or: [
      { category: { $regex: keyword, $options: "i" } },
      { foodType: { $regex: keyword, $options: "i" } },
    ],
  });
};

exports.searchRecipe = async (keyword) => {
  return await RecipesModel.find({
    $or: [
      { recipeName: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ],
  });
};
