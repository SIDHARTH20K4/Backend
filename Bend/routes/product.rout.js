const express = require('express');
const router = express.Router();
const product = require("../models/product.model.js");
const { getProduct } = require('../controllers/product.controler.js');
const { getProducts, updateProduct, createProduct, deteleProduct } = require('../controllers/product.controler.js');

router.get('/', getProduct);
router.get('/:id', getProducts);
router.put('/:id', updateProduct);
router.put('/', createProduct);
router.delete('/:id', deteleProduct);