const { Product } = require('../models/Product');

const saveProduct = async (payload) => {
  const product = new Product(payload);
  return await product.save();
};

module.exports = {
  saveProduct,
};
