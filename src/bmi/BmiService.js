const UserModel = require("../user/User");

exports.getBmiSummary = async (id) => {
  return await UserModel.findOne({ id }, { bmi: 1, weight: 1, height: 1 });
};

exports.updateBmi = async (id, bmiData) => {
  return await UserModel.findOneAndUpdate(
    { id },
    { $set: { bmi: bmiData.bmi, weight: bmiData.weight, height: bmiData.height } },
    { new: true, projection: { bmi: 1, weight: 1, height: 1 } }
  );
};
