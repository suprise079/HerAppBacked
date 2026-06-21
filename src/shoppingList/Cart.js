const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "cart",
  new Schema(
    {
      cartTitle: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      cartDescription: String,
      dueDate: String,
      priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "Medium",
      },
      isDefault: {
        type: Boolean,
        default: false,
      },
      count: Number,
      image: String,
      completed: {
        type: Number,
        default: 0,
      },
      outstanding: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  )
);
