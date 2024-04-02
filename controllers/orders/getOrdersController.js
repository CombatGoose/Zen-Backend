const Order = require('../../model/Order');

const handleGetOrders = async (req, res) => {
    const { phoneNumber } = req.body.category;
    if (!phoneNumber) return res.sendStatus(400); // Bad request

    const ordersList = await Order.find({phoneNumber: phoneNumber});
    if (!ordersList) return res.sendStatus(404);

    return res.status(200).json({ordersList});
}   

module.exports = { handleGetOrders };