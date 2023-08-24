const waterService = require("../services/WaterService");

exports.getWaterSummary = async (req, res) => {
  try {
    const water = await waterService.getWaterSummary(req.params.id);
    res.status(200).json(water);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
