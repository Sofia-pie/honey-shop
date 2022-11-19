const mongoose = require('mongoose');
const Joi = require('joi');

const productJoiSchema = Joi.object({
  price: Joi.number().required(),
  name: Joi.string().min(3).required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
});

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    id: Number,
    image: String,
    name: String,
    price: Number,
    description: String,
    additional: String,
    amount: Number,
    category: String,
  },
  { timestamps: { createdAt: 'created_date', updatedAt: false } }
);

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
  productJoiSchema,
};
