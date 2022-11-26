const express = require('express');

const router = express.Router();
// const { upload } = require('../upload.config');
const {
  getProducts,
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
} = require('../controllers/productsController');

const { authMiddleware } = require('../middleware/authMiddleware');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', getProducts);
router.post('/', authMiddleware, upload.single('img'), addProduct);
router.get('/:id', getProduct);
router.patch('/:id', authMiddleware, editProduct);
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = {
  productsRouter: router,
};
