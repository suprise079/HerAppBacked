const BlogModel = require("./Blog");

exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};
exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};

exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};

exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};

exports.getBlogByCategory = async (category) => {
  return await BlogModel.find({ category: category });
};

//Get recommended blogs [Will have it's own table and algorithm]
exports.getRecommendedBlogs = async () => {
  return await BlogModel.aggregate([{ $sample: { size: 10 } }]);
};

exports.searchBlog = async (keyword) => {
  return await BlogModel.find({
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } },
      { content: { $regex: keyword, $options: "i" } },
    ],
  });
};
