const bcrypt = require('bcryptjs');
const { User } = require('../models/User');

const changePassword = async ({ oldPassword, newPassword, userId }) => {
  const user = await User.findById(userId);
  if (await bcrypt.compare(String(oldPassword), String(user.password))) {
    return await User.findByIdAndUpdate(userId, {
      $set: { password: await bcrypt.hash(newPassword, 10) },
    });
  }
  throw new Error('Wrong password');
};
module.exports = {
  changePassword,
};
