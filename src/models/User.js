const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: String,
    age: Number,
    bio: String,
    avatar: {
      type: String,
      default:
        "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
    bmi: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
      default: 0,
    },
    water: {
      type: Number,
      default: 0,
    },
    calories: {
      type: Number,
      default: 0,
    },
    cooking: {
      type: Number,
      default: 0,
    },
    goals: {
      water: {
        type: Number,
        default: 0,
      },
      calories: {
        type: Number,
        default: 0,
      },
      bmi: {
        type: Number,
        default: 0,
      },
      weight: {
        type: Number,
        default: 0,
      },
      cooking: {
        type: Number,
        default: 0,
      },
    },
    rewards: {
      points: {
        type: Number,
        default: 0,
      },
      level: {
        type: Number,
        default: 0,
      },
      badges: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
