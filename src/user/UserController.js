const { default: mongoose } = require("mongoose");
const { createUserService, getUserService, updateUser } = require("./UserService");

exports.getUserById = async (req, res) => {
  try {
    const user = await getUserService(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createUserController = async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await createUserService(userInfo);

    res.status(201).json({ message: "User created successfully!\nPlease confirm your email to continue!" });
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      const messages = Object.values(e.errors).map((err) => err.message);
      return res.status(400).json({ error: "Validation error", details: messages });
    }

    if (e.code === 11000) {
      const field = Object.keys(e.keyValue)[0];
      return res.status(409).json({
        error: "Duplicate key",
        message: `${field} '${e.keyValue[field]}' already exists`
      });
    }

    console.error("Unexpected error in createUser:", e);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserController = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await getUserService(id);
    res.status(200).json(user);
  } catch (e) {
    console.error("Error in getUserController:", e);
    res.status(500).json({ error: e.message });
  }
};

exports.updateUserController = async (req, res) => {
  try {
    const userId = req.user.id;
    const updated = await updateUser(userId, req.body);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
  } catch (e) {
    console.error("Error in updateUserController:", e);
    res.status(500).json({ error: e.message });
  }
};

// Uncomment and convert these if you plan to use them
// async function updateUser(req, res) {
//   try {
//     const userInfo = req.body;
//     con
