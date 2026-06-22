const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Activity",
  new Schema({
    userId: {
      type: String,
      required: true,
    },
    activityId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    activityType: {
      type: String,
      required: true,
    },
    activityDescription: String,
    image: String, // Can be the recipe image or the user image
    activityName: String,
    activityCount: Number, // calories count
    activityCountUnit: String, // calories unit
    indicator1: String, // Duration
    indicator1Count: String, // Duration in seconds
    indicator1CountUnit: String,
    indicator2: String, // Food type
    indicator2Count: String,
    indicator2CountUnit: String,
    indicator3: String, // category
    indicator3Count: String,
    indicator3CountUnit: String,
  })
);
