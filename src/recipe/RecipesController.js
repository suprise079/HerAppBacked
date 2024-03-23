// const { create } = require("./Recipes copy.js");
const recipeServices = require("./RecipesService.js");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeServices.getAllRecipes();
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAdditionalRecipes = async (req, res) => {
  try {
    // request data from recipe api
    let recipe = await recipeServices.searchRecipe(req.params.keyword);
    //Pass data to duplicate funtion to save data in mangoDB

    //function to call get recipe from mangoDB
    console.log("recipe: " + recipe);
    res.status(200).json(recipe);
  } catch (e) {
    console.log("Error: " + e);
    res.status(500).json({ error: e.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const recipeInfo = req.body;
    // let result = await uploadImage(recipeInfo.image.path);
    const recipe = await recipeServices.createRecipe(recipeInfo);
    res.status(201).json(recipe);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await recipeServices.getRecipeById(req.params.id);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipeInfo = req.body;
    const recipe = await recipeServices.updateRecipe(req.params.id, recipeInfo);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await recipeServices.deleteRecipe(req.params.id);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getRecipeByCategory = async (req, res) => {
  try {
    const recipes = await recipeServices.getRecipeByCategory(req.params.category);
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.searchRecipe = async (req, res) => {
  try {
    const recipes = await recipeServices.searchRecipe(req.params.keyword);
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
