const mongoose = require('mongoose');
const Joi = require('joi');

// const blogJoiSchema = Joi.object({
// });

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    text: String,
  },
  { timestamps: { createdAt: 'created_date', updatedAt: false } }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  Blog,
  //   BlogJoiSchema,
};
