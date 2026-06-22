const UserModel = require("../user/User");

exports.getWaterSummary = async (id) => {
  return await UserModel.findOne({ id }, { water: 1 });
};

exports.updateWater = async (id, waterData) => {
  return await UserModel.findOneAndUpdate(
    { id },
    { $set: { water: waterData } },
    { new: true, projection: { water: 1 } }
  );
};
