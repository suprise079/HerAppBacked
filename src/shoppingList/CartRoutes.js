const express = require("express");
const router = express.Router();

const { deleteCart, createCart, updateCart, getAllUserCarts } = require("./CartController.js");

router.route("/").post(createCart);
router.route("/:id").get(getAllUserCarts).put(updateCart).delete(deleteCart);

module.exports = router;
