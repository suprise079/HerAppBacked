const UserModel = require("./User");

exports.getUser = async (id) => {
  return await UserModel.findById(id);
};

exports.createUserService = async (userInfo) => {
  return await UserModel.create(userInfo);
};

exports.getUserService = async (id) => {
  return await UserModel.findOne({ id });
};

exports.updateUser = async (id, userInfo) => {
  console.log("[UserService.updateUser] querying { id:", id, "} | fields:", Object.keys(userInfo).join(", "));
  const result = await UserModel.findOneAndUpdate({ id }, { $set: userInfo }, { new: true });
  console.log("[UserService.updateUser] document found:", !!result);
  return result;
};

exports.deleteUser = (id) => {
  return UserModel.findByIdAndDelete(id);
};
