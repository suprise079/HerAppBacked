const express = require("express");
const router = express.Router();
const {
  getAllNotifications,
  createNotification,
  getNotificationById,
  updateNotification,
  deleteNotification,
  getNotificationByCategory,
} = require("../controllers/NotificationsController.js");

router.route("/").get(getAllNotifications).post(createNotification);
router.route("/:id").get(getNotificationById).put(updateNotification).delete(deleteNotification);
router.route("/category/:category").get(getNotificationByCategory);

module.exports = router;
