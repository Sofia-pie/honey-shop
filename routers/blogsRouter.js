const express = require('express');
const {
  getBlogs,
  addBlog,
  editBlog,
  getBlog,
  deleteBlog,
} = require('../controllers/blogController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, addBlog);
router.get('/:id', getBlog);
router.patch('/:id', authMiddleware, editBlog);
router.delete('/:id', authMiddleware, deleteBlog);
module.exports = {
  blogsRouter: router,
};
