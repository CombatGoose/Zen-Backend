const express = require('express');
const router = express.Router();

const createProductController = require('../controllers/products/createProductController');

router.post('/', createProductController.handleCreateProduct);

module.exports = router;