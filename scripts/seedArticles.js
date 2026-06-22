const Blog = require('../src/blog/Blog');
const nutritionArticles = require('./data/nutritionArticles');
const studyExamArticles = require('./data/studyExamArticles');
const bmiArticles = require('./data/bmiArticles');

async function seedGroup(label, articles) {
  console.log(`\n── ${label} (${articles.length} articles) ──`);
  let created = 0;
  let skipped = 0;

  for (const article of articles) {
    try {
      await Blog.create(article);
      console.log(`  ✓ "${article.title}"`);
      created++;
    } catch (err) {
      if (err.code === 11000) {
        console.log(`  ~ "${article.title}" (already exists, skipped)`);
        skipped++;
      } else {
        console.error(`  ✗ "${article.title}" — ${err.message}`);
      }
    }
  }

  console.log(`  Result: ${created} created, ${skipped} skipped`);
  return { created, skipped };
}

async function seedArticles() {
  const nutrition = await seedGroup('Student Nutrition', nutritionArticles);
  const study = await seedGroup('Study & Exam Tips', studyExamArticles);
  const bmi = await seedGroup('BMI Advice', bmiArticles);

  const total = {
    created: nutrition.created + study.created + bmi.created,
    skipped: nutrition.skipped + study.skipped + bmi.skipped,
  };

  console.log(`\nArticles done — ${total.created} created, ${total.skipped} skipped\n`);
  return total;
}

module.exports = seedArticles;
