const express = require('express');
const router = express.Router();

const getProductController = require('../controllers/products/getProductController');

router.get('/', getProductController.handleGetProduct);

module.exports = router;