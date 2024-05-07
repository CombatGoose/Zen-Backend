const Order = require('../../model/Order');

const handleCreateOrder = async (req, res) => {
    try {
        const newOrderData = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            cardNumber: req.body.cardNumber,
            delivery: {
                typeDel: req.body.delivery.typeDel
            },
            createdAt: new Date(),
            finishPrice: req.body.finishPrice,
            orderProducts: req.body.orderProducts.map(product => ({
                productName: product.productName,
                productPrice: product.productPrice,
                count: product.count,
                imgSrc: product.imgSrc
            }))
        }

        if (req.body.adress) newOrderData.delivery.adress = req.body.delivery.adress;
        if (req.body.wishes) newOrderData.wishes = req.body.wishes;

        const newOrder = new Order(newOrderData);
        await newOrder.save();
        res.status(201).json({ "message": "Order created successfully" });
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

module.exports = { handleCreateOrder };