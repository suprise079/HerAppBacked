import { default as mongoose } from "mongoose";
import { createUserService, getUserService } from "./UserService.js";

export async function getUserById(req, res) {
  try {
    const user = await getUser(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export async function createUserController(req, res) {
  try {
    const userInfo = req.body;
    const user = await createUserService(userInfo);

    res.status(201).json({ message: "User created successfully!\nPlease confirm your email to continue..." });
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      // Handle schema validation errors
      const messages = Object.values(e.errors).map((err) => err.message);
      return res.status(400).json({ error: "Validation error", details: messages });
    }

    if (e.code === 11000) {
      // Handle duplicate key errors (e.g., email or id already exists)
      const field = Object.keys(e.keyValue)[0];
      return res.status(409).json({
        error: "Duplicate key",
        message: `${field} '${e.keyValue[field]}' already exists`
      });
    }

    console.error("Unexpected error in createUser:", e);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserController(req, res) {
  try {
    const id = req.user.id;
    const user = await getUserService(id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

// export async function updateUser(req, res) {
//   try {
//     const userInfo = req.body;
//     const user = await updateUser(req.params.id, userInfo);
//     res.status(204).json(user);
//   } catch (e) {
//     console.log("error occured while updating user: " + e);
//     res.status(500).json({ error: e.message });
//   }
// }

// export async function deleteUser(req, res) {
//   try {
//     const user = await deleteUser(req.params.id);
//     res.status(204).json(user);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// }
