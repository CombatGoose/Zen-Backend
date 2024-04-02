const Order = require('../../model/Order');

const handleCreateOrder = async (req, res) => {
    try {
        const newOrderData = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            cardNumber: req.body.cardNumber,
            delivery: {
                typeDel: req.body.typeDel
            },
            createdAt: new Date(),
            finishPrice: req.body.finishPrice,
            orderProducts: [
                {
                    productName: req.body.productName,
                    productPrice: req.body.productPrice,
                    count: req.body.count
                }
            ]
        }

        if (req.body.adress) newOrderData.adress = req.body.adress;
        if (req.body.wishes) newOrderData.wishes = req.body.wishes;

        const newOrder = new Order(newOrderData);
        await newOrder.save();
        res.status(201).json({ "message": "Order created successfully" });
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

module.exports = { handleCreateOrder };