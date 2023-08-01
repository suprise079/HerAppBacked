const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  getRecipeByCategory,
} = require("../controllers/RecipeController.js");

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/:id").get(getRecipeById).put(updateRecipe).delete(deleteRecipe);
router.route("/category/:category").get(getRecipeByCategory);

module.exports = router;
