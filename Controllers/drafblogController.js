const Blog = require("../model/blogs");

module.exports.getdraftblogs = function (req, res) {
  Blog.find({ state: draft })
    .limit(20)
    .then((blogs) => {
      res.status(200).json({
        message: "Success!",
        blogs_readcount: blogs.read_count + 1,
        blogs,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports.getadraftblog = function (req, res) {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.status(200).json({
        message: "Success!",
        blog,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports.createBlog = function (req, res) {
  const info = req.body;
  Blog.create(info)
    .then((blog) => {
      res.status(201).json({
        message: "Blog created successfully!",
        blog,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports.updateState = function (req, res) {
  const id = req.params.id;
  const state = req.body.state;
  Blog.findByIdAndUpdate(id, state)
    .then((blog) => {
      res.status(200).json({
        message: "State updated successfully!",
        blog,
      });
    })
    .catch((err) => {
      message: err.message;
    });
};

module.exports.updateBlog = function (req, res) {
  const id = req.params.id;
  const blogToUpdate = req.body;
  Blog.findByIdAndUpdate(id, blogToUpdate)
    .then((blog) => {
      res.status(200).json({
        message: "Blog updated successfully!",
        blog,
      });
    })
    .catch((err) => {
      res.status(400);
    });
};
