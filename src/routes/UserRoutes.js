const express = require("express");
const {
  createUser,
  getUserAuth,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController.js");

const router = express.Router();

router.route("/").post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/auth").post(getUserAuth);

module.exports = router;
