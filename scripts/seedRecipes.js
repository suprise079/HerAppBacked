const RecipesModel = require('../src/recipe/Recipes');
const recipes = require('./data/recipes');

async function seedRecipes() {
  console.log(`\n── Recipes (${recipes.length} recipes) ──`);
  let created = 0;
  let skipped = 0;

  for (const recipe of recipes) {
    try {
      await RecipesModel.create(recipe);
      console.log(`  ✓ "${recipe.recipeName}" [${recipe.foodType}]`);
      created++;
    } catch (err) {
      if (err.code === 11000) {
        console.log(`  ~ "${recipe.recipeName}" (already exists, skipped)`);
        skipped++;
      } else {
        console.error(`  ✗ "${recipe.recipeName}" — ${err.message}`);
      }
    }
  }

  console.log(`  Result: ${created} created, ${skipped} skipped\n`);
  return { created, skipped };
}

module.exports = seedRecipes;
