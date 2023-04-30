const bcryptjs = require('bcryptjs');
const { User } = require('../models/User');

const saveUser = async ({ email, password, name, phone }) => {
  const user = new User({
    name,
    email,
    password: await bcryptjs.hash(password, 10),
    phone,
  });

  return await user.save();
};

module.exports = {
  saveUser,
};
