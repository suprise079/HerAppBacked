const express = require("express");
const router = express.Router();

const { deleteCart, createCart, updateCart, getAllUserCarts, addItemToCart, updateItemInCart, getCartItems } = require("./CartController.js");

router.route("/").post(createCart);
// router.route("/:id").get(getAllUserCarts).put(updateCart).delete(deleteCart);
router.route("/items/:id").put(updateItemInCart);
router.route("/items").get(getCartItems).post(addItemToCart);

module.exports = router;
