const RecipesModel = require("./Recipes");
const RecipeActivityModel = require("./RecipeActivity");
const axios = require("axios");

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

exports.getAdditionalRecipes = async (keyword) => {
  const axios = require("axios");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.edamam.com/api/recipes/v2?type=any&q=${keyword}&app_id=02c303b2&app_key=70347312603c640e12dc5ebeedb0dcd1&diet=balanced&imageSize=REGULAR`,
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  };

  return await axios
    .request(config)
    .then((response) => JSON.stringify(response.data))
    .catch((error) => error);
};

exports.deleteRecipe = async (id) => {
  return await RecipesModel.findByIdAndDelete(id);
};

exports.getRecipeByCategory = async (keyword) => {
  // category = category.toLowerCase();
  return await RecipesModel.find({
    $or: [{ category: { $regex: keyword, $options: "i" } }, { foodType: { $regex: keyword, $options: "i" } }],
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

//Return the next link from the api
exports.duplicateApiData= async (res) => {
      
      res.hits.forEach(recipe => {
        let nr = {};
        recipe = recipe.recipe;

        nr.recipeName = recipe.label;
        nr.image = recipe.image;
        nr.source = recipe.source
        nr.serving = recipe.yield
        nr.dietLabels = recipe.dietLabels;
        nr.healthLabels = recipe.healthLabels
        nr.displayIngredients = recipe.ingredientLines;
        nr.ingredients = recipe.ingredients;
        nr.calories = recipe.calories;
        nr.time = recipe.totalTime;
        nr.mealType = recipe.mealType;
        nr.dishType = recipe.dishType;
        nr.nutrients = recipe.digest;
        nr.allergies = recipe.cautions;

        
      });
};
