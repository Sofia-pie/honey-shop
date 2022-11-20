const mongoose = require('mongoose');
const Joi = require('joi');

// const blogJoiSchema = Joi.object({
// });

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    name: String,
    description: String,
    text: String,
  },
  { timestamps: { createdAt: true } }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  Blog,
  //   BlogJoiSchema,
};
