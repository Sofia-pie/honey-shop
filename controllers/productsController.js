const { Product } = require('../models/Product');
const { saveProduct } = require('../services/productsService');

const getProducts = async (req, res, next) => {
  return Product.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      next(err);
    });
};

const addProduct = async (req, res, next) => {
  const payload = req.body;
  try {
    await saveProduct(payload);
  } catch (err) {
    return next(err);
  }
  return res.status(201).json({ msg: 'Success' });
};

const getProduct = async (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = {
  getProducts,
  addProduct,
  getProduct,
};
