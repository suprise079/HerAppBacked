const express = require("express");
const { getUserController, updateUserController } = require("./UserController");

const router = express.Router();

router.route("/getUser").get(getUserController);
router.route("/update").put(updateUserController);
// router.route("/:id").get(getUserById).delete(deleteUser);
// router.route("/auth").post(getUserAuth);

module.exports = router;
