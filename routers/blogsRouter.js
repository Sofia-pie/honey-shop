const express = require('express');
const {
  getBlogs,
  addBlog,
  editBlog,
} = require('../controllers/blogController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, addBlog);
router.get('/:id', addBlog);
router.patch('/:id', authMiddleware, editBlog);
module.exports = {
  blogsRouter: router,
};
