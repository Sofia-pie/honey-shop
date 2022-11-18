const mongoose = require('mongoose');
const Joi = require('joi');

const userJoiSchema = Joi.object({
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().min(3).required().email(),
});

const { Schema } = mongoose;

const userchema = new Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_date', updatedAt: false } }
);

const User = mongoose.model('User', userchema);

module.exports = {
  User,
  userJoiSchema,
};
