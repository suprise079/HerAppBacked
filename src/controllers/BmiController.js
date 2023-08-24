const BmiService = require("../services/BmiService");

exports.getBmiSummary = async (req, res) => {
  try {
    const bmi = await BmiService.getBmiSummary(req.params.id);
    res.status(200).json(bmi);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
