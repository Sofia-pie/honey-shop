const bcryptjs = require('bcryptjs');
const { User } = require('../models/User');

const saveUser = async ({ email, password, name }) => {
  const user = new User({
    name,
    email,
    password: await bcryptjs.hash(password, 10),
  });

  return await user.save();
};

module.exports = {
  saveUser,
};
