const Blog = require("../model/blogs");

module.exports.searchable = async function (req, res) {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 20;
  const searchTerm = req.query.search;

  let query = {};

  if (searchTerm) {
    query = {
      $or: [
        {
          title: { $regex: searchTerm, $options: "i" },
        },
        {
          author: { $regex: searchTerm, $options: "i" },
        },
        {
          tags: { $regex: searchTerm, $options: "i" },
        },
      ],
    };
  }

  const totalBlogs = await Blog.countDocuments(query);
  const totalPages = Math.ceil(totalBlogs / perPage);

  Blog.find({ query })
    .limit(perPage)
    .skip((page - 1) * perPage)
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.status(200).json({
        message: "Success!",
        blogs,
        totalPages,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

module.exports.getPublishedblogs = function (req, res) {
  Blog.find({ state: "published" })
    .populate()
    .limit(20)
    .then((blogs) => {
      res.status(200).json({
        message: "Success!",
        blogs,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports.getAPublishedblog = function (req, res) {
  const id = req.params.id;
  const projections = {};
  Blog.findById(id, projections)
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
