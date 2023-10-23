const { getWaterSummary } = require("./WaterController");
const express = require("express");
const router = express.Router();

router.route("/:id").get(getWaterSummary);

module.exports = router;
