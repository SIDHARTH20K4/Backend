const express = require('express');
const router = express.Router();
const {
    getProduct,
    getProducts,
    updateProduct,
    createProduct,
    deteleProduct
} = require('../controllers/product.controler.js');

router.get('/', getProduct);
router.get('/:id', getProducts);
router.put('/:id', updateProduct);
router.put('/', createProduct);
router.delete('/:id', deteleProduct);

module.exports = router;