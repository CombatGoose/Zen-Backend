const Product = require("../../model/Product");

const handleCreateProduct = async (req, res) => {
    try {
        const newProductData = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            photo: req.body.photo
        };

        if (req.body.grams) {
            newProductData.gram = req.body.gram;
        }

        if (req.body.calories) {
            newProductData.calories = req.body.calories;
        }

        const newProduct = new Product(newProductData);
        await newProduct.save();
        res.status(201).json({ "message": "Product created successfully" });
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
};

module.exports = { handleCreateProduct };