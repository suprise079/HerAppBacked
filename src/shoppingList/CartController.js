const cartServices = require("./CartService.js");

exports.getAllUserCarts = async (req, res) => {
  try {
    const carts = await cartServices.getAllUserCarts(req.params.id);
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
    const item = await cartServices.addItemToCart(itemInfo);
    res.status(201).json(item);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const items = await cartServices.getCartItems(req.params.id);
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateItemInCart = async (req, res) => {
  try {
    const itemInfo = req.body;
    const item = await cartServices.updateItemInCart(req.params.id, itemInfo);
    res.status(200).json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
