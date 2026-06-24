const { default: mongoose } = require("mongoose");
const { createUserService, getUserService, updateUser, addFavouriteRecipe, removeFavouriteRecipe, deleteUserBySupabaseId, savePushToken } = require("./UserService");

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
    const userId = req.user?.id;
    console.log("[updateUserController] userId from token:", userId);
    console.log("[updateUserController] body:", JSON.stringify(req.body).slice(0, 300));

    if (!userId) {
      console.error("[updateUserController] No userId on req.user:", req.user);
      return res.status(401).json({ error: "Missing user ID from token" });
    }

    const updated = await updateUser(userId, req.body);
    console.log("[updateUserController] result:", updated ? "found & updated" : "USER NOT FOUND");
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
  } catch (e) {
    console.error("[updateUserController] Error:", e.message);
    res.status(500).json({ error: e.message });
  }
};

exports.addFavouriteController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { recipeId } = req.params;
    if (!userId) return res.status(401).json({ error: "Missing user ID from token" });
    const updated = await addFavouriteRecipe(userId, recipeId);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ favouriteRecipes: updated.favouriteRecipes });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.removeFavouriteController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { recipeId } = req.params;
    if (!userId) return res.status(401).json({ error: "Missing user ID from token" });
    const updated = await removeFavouriteRecipe(userId, recipeId);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ favouriteRecipes: updated.favouriteRecipes });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getFavouritesController = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Missing user ID from token" });
    const user = await getUserService(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ favouriteRecipes: user.favouriteRecipes || [] });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.savePushTokenController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { pushToken } = req.body;
    if (!userId) return res.status(401).json({ error: "Missing user ID from token" });
    if (!pushToken) return res.status(400).json({ error: "pushToken is required" });
    const updated = await savePushToken(userId, pushToken);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "Push token saved" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteAccountController = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Missing user ID from token" });
    const deleted = await deleteUserBySupabaseId(userId);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Uncomment and convert these if you plan to use them
// async function updateUser(req, res) {
//   try {
//     const userInfo = req.body;
//     con
