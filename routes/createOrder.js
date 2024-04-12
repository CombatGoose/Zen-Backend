const express = require('express');
const router = express.Router();

const createOrderController = require('../controllers/orders/createOrderController');

router.post('/', createOrderController.handleCreateOrder);

module.exports = router;