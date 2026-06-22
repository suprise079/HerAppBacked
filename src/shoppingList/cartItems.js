const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "cartItems",
  new Schema(
    {
      cartId: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        default: "n/a",
      },
      image: {
        type: String,
        default: "n/a",
      },
      count: {
        type: Number,
        default: 1,
      },
      countUnit: {
        type: String,
        default: "n/a",
      },
      quantity: {
        type: Number,
        default: 1,
      },
      unit: {
        type: String,
        default: "pcs",
      },
      category: {
        type: String,
        default: "Other",
      },
      text: {
        type: String,
        required: true,
      },
      isBought: {
        type: Boolean,
        default: false,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);
