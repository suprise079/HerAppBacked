const UserModel = require("./User");

exports.getUser = async (id) => {
  return await UserModel.findById(id);
};

exports.createUser = async (userInfo) => {
  return await UserModel.create(userInfo);
};

exports.getUserAuth = async (username, password) => {
  let users = await UserModel.find();
  // console.log("users: " + users);
  return await UserModel.findOne({ email: username, password: password });
};

exports.updateUser = (id, userInfo) => {
  return UserModel.findByIdAndUpdate(id, userInfo);
};

exports.deleteUser = (id) => {
  return UserModel.findByIdAndDelete(id);
};
