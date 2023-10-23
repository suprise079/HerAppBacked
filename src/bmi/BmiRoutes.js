const express = require("express");
const { getBmiSummary } = require("./BmiController");
const router = express.Router();

router.route("/:id").get(getBmiSummary);

module.exports = router;
