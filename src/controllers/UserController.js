const userService = require("../services/UserService.js");

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await userService.createUser(userInfo);
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getUserAuth = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    const user = await userService.getUserAuth(email, password);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await userService.updateUser(req.params.id, userInfo);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
