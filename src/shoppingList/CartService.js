const CartsModel = require("./Cart.js");

exports.getAllUserCarts = async (userId) => {
  console.log("userId: ", userId);
  return await CartsModel.find({ $or: [{ userId: { $regex: userId, $options: "i" } }] });
};

const cartUpdateHandler = (isNew, ingredients) => {
  let cart = isNew ? ingredients : {};

  ingredients = isNew ? ingredients.list : ingredients;
  console.log("ingredients: ", ingredients);
  cart.count = ingredients.length;
  cart.completed = ingredients.reduce((acc, curr) => (curr.isPurchased ? acc + 1 : acc), 0);
  cart.outstanding = ingredients.length - cart.completed;
  cart.list = ingredients;
  return cart;
};

exports.createCart = async (recipes) => {
  let newData = cartUpdateHandler(true, recipes);
  return await CartsModel.create(recipes);
};
exports.getCartById = async (id) => {
  return await CartsModel.findById(id);
};

exports.updateCart = async (id, ingredients) => {
  let newData = cartUpdateHandler(false, ingredients);
  console.log("newData: ", newData);
  return await CartsModel.findByIdAndUpdate(id, newData);
};

exports.deleteCart = async (id) => {
  return await CartsModel.findByIdAndDelete(id);
};
