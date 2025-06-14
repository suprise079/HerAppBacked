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

exports.updateUser = (id, userInfo) => {
  return UserModel.findByIdAndUpdate(id, userInfo);
};

exports.deleteUser = (id) => {
  return UserModel.findByIdAndDelete(id);
};
