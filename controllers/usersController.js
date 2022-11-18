const { User } = require('../models/User');
const { changePassword } = require('../services/usersService');

const showUserInfo = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const user = await User.findById(req.params.id);
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
        email: user.email,
        created_date: user.created_date,
        phone: user.phone,
      },
    });
  } catch (err) {
    next(err);
  }
};

const changeUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    await changePassword({ oldPassword, newPassword, userId: req.user.userId });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
  return res.json({
    message: 'Password changed successfully',
  });
};

const deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.user.userId)
    .then(() => {
      res.json({
        message: 'Profile deleted successfully',
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  showUserInfo,
  changeUserPassword,
  deleteUser,
};
