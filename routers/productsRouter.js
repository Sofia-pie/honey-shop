const express = require('express');

const router = express.Router();

const {
  getProducts,
  addProduct,
  getProduct,
} = require('../controllers/productsController');

router.get('/', getProducts);
router.post('/', addProduct);
router.get('/:id', getProduct);

module.exports = {
  productsRouter: router,
};
