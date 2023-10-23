const blogServices = require("./BlogService.js");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogServices.getAllBlogs();
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blogInfo = req.body;
    // let result = await uploadImage(blogInfo.image.path);
    const blog = await blogServices.createBlog(blogInfo);
    res.status(201).json(blog);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogServices.getBlogById(req.params.id);
    res.status(200).json(blog);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blogInfo = req.body;
    const blog = await blogServices.updateBlog(req.params.id, blogInfo);
    res.status(200).json(blog);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogServices.deleteBlog(req.params.id);
    res.status(200).json(blog);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getBlogByCategory = async (req, res) => {
  try {
    const blogs = await blogServices.getBlogByCategory(req.params.category);
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.searchBlog = async (req, res) => {
  try {
    const blogs = await blogServices.searchBlog(req.params.keyword);
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
