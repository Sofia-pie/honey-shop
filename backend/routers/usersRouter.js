const express = require('express');

const router = express.Router();

const { authMiddleware } = require('../middleware/authMiddleware');
const {
  showUserInfo,
  changeUserPassword,
  deleteUser,
} = require('../controllers/usersController');

router.get('/:id', authMiddleware, showUserInfo);
router.patch('/:id', authMiddleware, changeUserPassword);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = {
  usersRouter: router,
};
