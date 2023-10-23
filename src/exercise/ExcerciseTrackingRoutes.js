const express = require("express");
const router = express.Router();

const { getProgress, updateProgress } = require("./ExcerciseTrackingController.js");

router.get("/:userId", getProgress);
router.post("/", updateProgress);

module.exports = router;
