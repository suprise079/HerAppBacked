const express = require("express");
const { getBmiSummary, updateBmi } = require("./BmiController");
const router = express.Router();

router.route("/:id").get(getBmiSummary).put(updateBmi);

module.exports = router;
