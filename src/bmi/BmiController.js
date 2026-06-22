const BmiService = require("./BmiService");

exports.getBmiSummary = async (req, res) => {
  console.log("[BmiController.get] userId:", req.params.id);
  try {
    const bmi = await BmiService.getBmiSummary(req.params.id);
    console.log("[BmiController.get] result:", bmi ? JSON.stringify(bmi).slice(0, 200) : "NOT FOUND");
    res.status(200).json(bmi);
  } catch (e) {
    console.error("[BmiController.get] Error:", e.message);
    res.status(500).json({ error: e.message });
  }
};

exports.updateBmi = async (req, res) => {
  console.log("[BmiController.update] userId:", req.params.id, "| body:", JSON.stringify(req.body));
  try {
    const updated = await BmiService.updateBmi(req.params.id, req.body);
    console.log("[BmiController.update] result:", updated ? "updated" : "USER NOT FOUND");
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
  } catch (e) {
    console.error("[BmiController.update] Error:", e.message);
    res.status(500).json({ error: e.message });
  }
};
