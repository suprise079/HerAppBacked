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
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatar: {
      type: String,
      default:
        "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
    },
    gender: String,
    age: Number,
    bio: {
      type: String,
      default: "I am a new user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
    bmi: {
      count: {
        type: Number,
        default: 0,
      },
      state: {
        type: String,
        default: "Normal",
      },
    },
    calories: {
      carbohydrates: { type: Number, default: 0 },
      proteins: { type: Number, default: 0 },
      fats: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
    },
    heart: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    weight: { type: Number, default: 0 },
    water: { type: Number, default: 0 },
    steps: { type: Number, default: 0 },
    goals: {
      water: {
        type: Number,
        default: 8,
      },
      calories: {
        carbohydrates: { type: Number, default: 250 },
        proteins: { type: Number, default: 50 },
        fats: { type: Number, default: 67 },
        total: { type: Number, default: 2000 },
      },
      bmi: { type: Number, default: 0 },
      weight: { type: Number, default: 0 },
      steps: {
        type: Number,
        default: 1000,
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
