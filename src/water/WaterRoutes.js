const { getWaterSummary, updateWater } = require("./WaterController");
const express = require("express");
const router = express.Router();

router.route("/:id").get(getWaterSummary).put(updateWater);

module.exports = router;
