const express = require('express');
const router = express.Router();
const { getMealPlan, saveMealPlan } = require('./MealPlanController.js');

router.route('/').get(getMealPlan).put(saveMealPlan);

module.exports = router;
