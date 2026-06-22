/**
 * Master seed script — run from the HerAppBacked directory:
 *
 *   npm run seed
 *
 * Requires DB_URI in .env (same variable used by the server).
 */

require('dotenv').config();
const { ConnectDB } = require('../databases/mangoDB');
const mongoose = require('mongoose');
const seedArticles = require('./seedArticles');
const seedExercises = require('./seedExercises');
const seedRecipes = require('./seedRecipes');

async function seed() {
  console.log('=== HER App — Beta Data Seed ===\n');

  await ConnectDB();

  try {
    await seedArticles();
    await seedExercises();
    await seedRecipes();
    console.log('=== Seed complete ===');
  } catch (err) {
    console.error('\nSeed failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
