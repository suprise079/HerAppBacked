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

exports.deleteUserBySupabaseId = async (id) => {
  return await UserModel.findOneAndDelete({ id });
};

exports.addFavouriteRecipe = async (id, recipeId) => {
  return await UserModel.findOneAndUpdate(
    { id },
    { $addToSet: { favouriteRecipes: recipeId } },
    { new: true }
  );
};

exports.removeFavouriteRecipe = async (id, recipeId) => {
  return await UserModel.findOneAndUpdate(
    { id },
    { $pull: { favouriteRecipes: recipeId } },
    { new: true }
  );
};

exports.savePushToken = async (id, pushToken) => {
  return await UserModel.findOneAndUpdate(
    { id },
    { $set: { pushToken } },
    { new: true }
  );
};
