const express = require("express");
const { getUserController } = require("./UserController");

const router = express.Router();

router.route("/getUser").get(getUserController);
// router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
// router.route("/auth").post(getUserAuth);

module.exports = router;
