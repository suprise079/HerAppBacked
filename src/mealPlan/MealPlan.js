const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'MealPlan',
  new Schema(
    {
      userId:   { type: String, required: true, unique: true },
      weekPlan: { type: Schema.Types.Mixed, default: {} },
    },
    { timestamps: true }
  )
);
