const express = require('express');

const router = express.Router();

const { authMiddleware } = require('../middleware/authMiddleware');
const {
  showUserInfo,
  changeUserPassword,
  deleteUser,
} = require('../controllers/usersController');

router.get('/me', authMiddleware, showUserInfo);
router.patch('/me', authMiddleware, changeUserPassword);
router.delete('/me', authMiddleware, deleteUser);

module.exports = {
  usersRouter: router,
};
