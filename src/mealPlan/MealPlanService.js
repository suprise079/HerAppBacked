const MealPlanModel = require('./MealPlan.js');

exports.getMealPlan = async (userId) =>
  MealPlanModel.findOne({ userId });

exports.saveMealPlan = async (userId, weekPlan) =>
  MealPlanModel.findOneAndUpdate(
    { userId },
    { $set: { weekPlan } },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
