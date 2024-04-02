const express = require('express');
const router = express.Router();

const getAllProductsController = require('../controllers/products/getAllProductsController');

router.get('/', getAllProductsController.handleGetAllProducts);

module.exports = router;