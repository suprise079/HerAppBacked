const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogByCategory,
  searchBlog,
} = require("../controllers/BlogController.js");

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
router.route("/category/:category").get(getBlogByCategory);
router.route("/search/:keyword").get(searchBlog);

module.exports = router;
