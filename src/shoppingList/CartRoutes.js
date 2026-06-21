const express = require("express");
const router = express.Router();

const { deleteCart, createCart, updateCart, getAllUserCarts, addItemToCart, updateItemInCart, getCartItems } = require("./CartController.js");

// Items routes must come before /:id to avoid "items" being treated as an id
router.route("/items").get(getCartItems).post(addItemToCart);
router.route("/items/:id").put(updateItemInCart);

// Shopping list (cart) management routes
router.route("/").get(getAllUserCarts).post(createCart);
router.route("/:id").put(updateCart).delete(deleteCart);

module.exports = router;
