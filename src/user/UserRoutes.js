const express = require("express");
const {
  getUserController,
  updateUserController,
  addFavouriteController,
  removeFavouriteController,
  getFavouritesController,
  savePushTokenController,
  deleteAccountController
} = require("./UserController");

const router = express.Router();

router.route("/getUser").get(getUserController);
router.route("/update").put(updateUserController);
router.route("/favourites").get(getFavouritesController);
router.route("/favourite/:recipeId").post(addFavouriteController).delete(removeFavouriteController);
router.route("/pushToken").put(savePushTokenController);
router.route("/delete").delete(deleteAccountController);

module.exports = router;
