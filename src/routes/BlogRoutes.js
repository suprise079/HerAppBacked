const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogByCategory,
} = require("../controllers/BlogController.js");

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
router.route("/category/:category").get(getBlogByCategory);

module.exports = router;
