const express = require('express');

const router = express.Router();

const {
  getProducts,
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
} = require('../controllers/productsController');

const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.post('/', authMiddleware, addProduct);
router.get('/:id', getProduct);
router.patch('/:id', authMiddleware, editProduct);
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = {
  productsRouter: router,
};
