const { Product } = require('../models/Product');
var fs = require('fs');
var path = require('path');
const saveProduct = async (payload, img, url) => {
  const obj = { ...payload, img: url + '/uploads/' + img.filename };
  console.log(obj);
  const product = new Product(obj);
  return await product.save();
};

module.exports = {
  saveProduct,
};
