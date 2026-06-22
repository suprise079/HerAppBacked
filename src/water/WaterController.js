const waterService = require("./WaterService");

exports.getWaterSummary = async (req, res) => {
  console.log("[WaterController.get] userId:", req.params.id);
  try {
    const water = await waterService.getWaterSummary(req.params.id);
    console.log("[WaterController.get] result:", water ? JSON.stringify(water).slice(0, 200) : "NOT FOUND");
    res.status(200).json(water);
  } catch (e) {
    console.error("[WaterController.get] Error:", e.message);
    res.status(500).json({ error: e.message });
  }
};

exports.updateWater = async (req, res) => {
  console.log("[WaterController.update] userId:", req.params.id, "| body:", JSON.stringify(req.body));
  try {
    const updated = await waterService.updateWater(req.params.id, req.body);
    console.log("[WaterController.update] result:", updated ? "updated" : "USER NOT FOUND");
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
  } catch (e) {
    console.error("[WaterController.update] Error:", e.message);
    res.status(500).json({ error: e.message });
  }
};
