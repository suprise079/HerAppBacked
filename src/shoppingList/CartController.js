const cartServices = require("./CartService.js");

exports.getAllUserCarts = async (req, res) => {
  try {
    const carts = await cartServices.getAllUserCarts(req.user.id);
    res.status(200).json(carts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createCart = async (req, res) => {
  try {
    const cartInfo = req.body;
    // let result = await uploadImage(cartInfo.image.path);
    const cart = await cartServices.createCart(cartInfo);
    res.status(201).json(cart);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await cartServices.getCartById(req.params.id);
    res.status(200).json(cart);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const cartInfo = req.body;
    const cart = await cartServices.updateCart(req.params.id, cartInfo);
    res.status(200).json(cart);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await cartServices.deleteCart(req.params.id);
    res.status(200).json(cart);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getCartByCategory = async (req, res) => {
  try {
    const carts = await cartServices.getCartByCategory(req.params.category);
    res.status(200).json(carts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.searchCart = async (req, res) => {
  try {
    const carts = await cartServices.searchCart(req.params.keyword);
    res.status(200).json(carts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const itemInfo = req.body;
    const userId = req.user.id;
    const item = await cartServices.addItemToCart({ ...itemInfo, userId });
    res.status(201).json(item);
  } catch (e) {
    console.error("Error adding item to cart:", e);
    res.status(500).json({ Error: e.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    console.log("received request to get cart items for user:", req.user.id);
    const items = await cartServices.getCartItems(req.user.id);
    console.log("Retrieved cart items:", items);
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateItemInCart = async (req, res) => {
  try {
    const item = await cartServices.updateItemInCart(req.params.id, req.body);
    res.status(200).json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
