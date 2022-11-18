const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, userJoiSchema } = require('../models/User.js');
const { saveUser } = require('../services/authService');

const config = process.env;

const registerUser = async (req, res, next) => {
  const { email, password, name, phone } = req.body;
  await userJoiSchema
    .validateAsync({ email, password, name, phone })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });

  await saveUser({ email, password, name, phone }).catch((err) => {
    next(err);
  });
  return await res.status(201).json({
    message: 'Profile created successfully',
  });
};

const loginUser = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (
    user &&
    (await bcryptjs.compare(String(req.body.password), String(user.password)))
  ) {
    const payload = {
      email: user.email,
      isAdmin: user.isAdmin,
      userId: user._id,
    };
    const jwtToken = jwt.sign(payload, config.TOKEN_KEY);
    return res.json({ jwt_token: jwtToken, _id: user._id });
  }
  return res.status(400).json({ message: 'Not authorized' });
};

module.exports = {
  registerUser,
  loginUser,
};
