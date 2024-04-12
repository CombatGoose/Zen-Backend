const express = require('express');
const router = express.Router();

const getOrdersController = require('../controllers/orders/getOrdersController');

router.get('/', getOrdersController.handleGetOrders);

module.exports = router;