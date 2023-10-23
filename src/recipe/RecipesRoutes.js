const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  getRecipeByCategory,
  searchRecipe,
} = require("./RecipesController.js");

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/:id").get(getRecipeById).put(updateRecipe).delete(deleteRecipe);
router.route("/category/:category").get(getRecipeByCategory);
router.route("/search/:keyword").get(searchRecipe);

module.exports = router;
