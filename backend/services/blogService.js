const { Blog } = require('../models/Blog');

const saveBlog = async (payload) => {
  const blog = new Blog(payload);
  return await blog.save();
};

module.exports = {
  saveBlog,
};
