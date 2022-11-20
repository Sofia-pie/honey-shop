const { Product, productJoiSchema } = require('../models/Product');
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

const editProduct = async (req, res, next) => {
  const payload = req.body;
  await productJoiSchema.validateAsync(payload);
  try {
    await Product.findByIdAndUpdate(req.params.id, payload);
    return res.status(200).json('sucess');
  } catch (err) {
    next(err);
  }
};

const deleteProduct = (req, res, next) => {
  return Product.findByIdAndDelete(res.params.id)
    .then(() => {
      res.status(200).json('Deleted');
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = {
  getProducts,
  addProduct,
  getProduct,
  editProduct,
};
