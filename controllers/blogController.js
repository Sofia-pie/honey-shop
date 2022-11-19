const { Blog } = require('../models/Blog');

const getBlogs = (req, res, next) => {
  Blog.find({})
    .then((blogs) => res.status(200).json(blogs))
    .catch((err) => next(err));
};

const addBlog = (req, res, next) => {
  const payload = req.body;
  const blog = new Blog(payload);
  blog
    .save()
    .then(() => res.status(201).json('Success'))
    .catch((err) => next(err));
};

const getBlog = (req, res, next) => {
  Blog.findById(req.params.id)
    .then((blog) => res.status(200).json(blog))
    .catch((err) => next(err));
};

module.exports = {
  getBlogs,
  addBlog,
  getBlog,
};
