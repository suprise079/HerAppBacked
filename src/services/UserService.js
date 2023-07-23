const UserModel = require("../models/User");

exports.getUser = async (id) => {
  return await UserModel.findById(id);
};

exports.createUser = async (userInfo) => {
  return await UserModel.create(userInfo);
};

exports.getUserAuth = async (username, password) => {
  return await UserModel.findOne(
    { email: username, password: password },
    { email: 1, password: 1, _id: 0 }
  );
};

exports.updateUser = (id, userInfo) => {
  return UserModel.findByIdAndUpdate(id, userInfo);
};

exports.deleteUser = (id) => {
  return UserModel.findByIdAndDelete(id);
};
