const UserModel = require("../user/User");

exports.getBmiSummary = async (id) => {
  return await UserModel.findById(id, { bmi: 1, weight: 1, height: 1 });
};
