const { recordActivity, getActivityByUser } = require("./ActivityController");
const express = require("express");
const router = express.Router();

router.route("/").post(recordActivity);
router.route("/:activityType/:filter/:id").get(getActivityByUser);

module.exports = router;
