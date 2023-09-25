const express = require("express");
const router = express.Router();

const { getProgress, updateProgress } = require("../controllers/ExcerciseTrackingController.js");

router.get("/:userId", getProgress);
router.post("/", updateProgress);

module.exports = router;
