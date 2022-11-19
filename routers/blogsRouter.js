const express = require('express');
const { getBlogs, addBlog } = require('../controllers/blogController');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', addBlog);
router.get('/:id', addBlog);

module.exports = {
  blogsRouter: router,
};
