const Excercises = require('../src/exercise/Excercises');
const exercisePrograms = require('./data/exercisePrograms');

async function seedExercises() {
  console.log(`\n── Exercise Programs (${exercisePrograms.length} programs) ──`);
  let created = 0;
  let skipped = 0;

  for (const program of exercisePrograms) {
    try {
      await Excercises.create(program);
      console.log(`  ✓ "${program.name}" (${program.workouts.length} workouts)`);
      created++;
    } catch (err) {
      if (err.code === 11000) {
        console.log(`  ~ "${program.name}" (already exists, skipped)`);
        skipped++;
      } else {
        console.error(`  ✗ "${program.name}" — ${err.message}`);
      }
    }
  }

  console.log(`  Result: ${created} created, ${skipped} skipped\n`);
  return { created, skipped };
}

module.exports = seedExercises;
