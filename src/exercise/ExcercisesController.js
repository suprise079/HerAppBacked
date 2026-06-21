const ExcerciseServices = require("./ExcerciseService.js");

exports.getAllExcercises = async (req, res) => {
  console.log("Received request to get all excercises");
  try {
    const ExcercisesList = await ExcerciseServices.getAllExcercises();
    res.status(200).json(ExcercisesList);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createExcercise = async (req, res) => {
  try {
    const excerciseInfo = req.body;
    // let result = await uploadImage(excercise_InstructionInfo.image.path);
    const excerciseRes = await ExcerciseServices.createExcercise(excerciseInfo);
    res.status(201).json(excerciseRes);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.updateExcercise = async (req, res) => {
  try {
    const excerciseInfo = req.body;
    var excerciseRes = "";
    //if image is not updated
    if (excerciseInfo.image) {
      // let result = await uploadImage(excercise_InstructionInfo.image.path);
      excerciseRes = await ExcerciseServices.updateExcercise(req.params.id, excerciseInfo);
    } else {
      excerciseRes = await ExcerciseServices.updateExcercise(req.params.id, excerciseInfo);
    }
    res.status(200).json(excerciseRes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteExcercise = async (req, res) => {
  try {
    const excerciseRes = await ExcerciseServices.deleteExcercise(req.params.id);
    res.status(200).json(excerciseRes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// =====================================+* Recipe activity services *+=========================================================================

exports.getProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const progress = await ExcerciseServices.getExcerciseProgress(userId);
    res.status(200).json(progress);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    console.log("received request to update progress:" + req.body);
    const userId = req.user.id;
    let excerciseId = req.body.excerciseId;
    let progress = req.body.progress;
    const progressRes = await ExcerciseServices.updateExcerciseProgress(userId, excerciseId, progress);
    res.status(204).json(progressRes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
