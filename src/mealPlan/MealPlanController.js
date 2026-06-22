const svc = require('./MealPlanService.js');

exports.getMealPlan = async (req, res) => {
  try {
    const doc = await svc.getMealPlan(req.user.id);
    res.status(200).json({ weekPlan: doc?.weekPlan ?? {} });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.saveMealPlan = async (req, res) => {
  try {
    const { weekPlan } = req.body;
    if (!weekPlan || typeof weekPlan !== 'object') {
      return res.status(400).json({ error: 'weekPlan is required and must be an object' });
    }
    const doc = await svc.saveMealPlan(req.user.id, weekPlan);
    res.status(200).json({ weekPlan: doc.weekPlan });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
