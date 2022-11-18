const mongoose = require('mongoose');
const Joi = require('joi');
const { string } = require('joi');

const userJoiSchema = Joi.object({
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().min(3).required().email(),
  name: Joi.string().min(3).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const { Schema } = mongoose;

const userchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
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
    phone: {
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
