

const excercise_InstructionServices = require("../services/EventService.js");

exports.getAllExcercise_Instructions = async (req, res) => {
  try {
    const excercise_Instructions = await excercise_InstructionServices.getAllExcercise_Instructions();
    res.status(200).json(excercise_Instructions);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const excercise_InstructionInfo = req.body;
    // let result = await uploadImage(excercise_InstructionInfo.image.path);
    const excercise_Instruction = await excercise_InstructionServices.createEvent({
      ...excercise_InstructionInfo,
      image: excercise_InstructionInfo.image.path,
    });
    res.status(201).json(excercise_Instruction);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const excercise_Instruction = await excercise_InstructionServices.getEventById(req.params.id);
    res.status(200).json(excercise_Instruction);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const excercise_InstructionInfo = req.body;
    const excercise_Instruction = await excercise_InstructionServices.updateEvent(req.params.id, {
      ...excercise_InstructionInfo,
      image: excercise_InstructionInfo.image.path,
    });
    res.status(200).json(excercise_Instruction);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const excercise_Instruction = await excercise_InstructionServices.deleteEvent(req.params.id);
    res.status(200).json(excercise_Instruction);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getEventByCategory = async (req, res) => {
  try {
    const excercise_Instructions = await excercise_InstructionServices.getEventByCategory(req.params.category);
    res.status(200).json(excercise_Instructions);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

