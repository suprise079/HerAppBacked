const express = require("express");
const router = express.Router();
const {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  getEventByCategory,
} = require("../controllers/EventController.js");

router.route("/").get(getAllEvents).post(createEvent);
router.route("/:id").get(getEventById).put(updateEvent).delete(deleteEvent);
router.route("/category/:category").get(getEventByCategory);

module.exports = router;
