const CartsModel = require("./Cart.js");
const CartItemsModel = require("./cartItems.js");

exports.getAllUserCarts = async (userId) => {
  console.log("userId: ", userId);
  return await CartsModel.find({ $or: [{ userId: { $regex: userId, $options: "i" } }] });
};

exports.createCart = async (cartInfo) => {
  return await CartsModel.create(cartInfo);
};

exports.getCarts = async (userId) => {
  return await CartsModel.find({ userId: userId });
};

exports.updateCart = async (id, cartInfo) => {
  return await CartsModel.findByIdAndUpdate(id, cartInfo);
};

exports.deleteCart = async (id) => {
  return await CartsModel.findByIdAndDelete(id);
};

exports.addItemToCart = async (iteminfo) => {
  return await CartItemsModel.create(iteminfo);
};

exports.getCartItems = async (userId) => {
  return await CartItemsModel.find({ userId: userId, isDeleted: false });
};

exports.updateItemInCart = async (id, itemInfo) => {
  return await CartItemsModel.findByIdAndUpdate(id, itemInfo);
};
