const ExcerciseTrackingService = require("../services/ExcerciseTrackingService.js");

exports.getProgress = async (req, res) => {
  try {
    let userId = req.params.userId;
    const progress = await ExcerciseTrackingService.getExcerciseProgress(userId);
    res.status(200).json(progress);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    console.log("received request to update progress:" + req.body);
    let userId = req.body.userId;
    let excerciseId = req.body.excerciseId;
    let progress = req.body.progress;
    const progressRes = await ExcerciseTrackingService.updateExcerciseProgress(userId, excerciseId, progress);
    res.status(200).json(progressRes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
