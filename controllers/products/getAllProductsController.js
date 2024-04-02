const Product = require('../../model/Product');

const handleGetAllProducts = async (req, res) => {
    const productsList = await Product.find({category: req.query.category});
    if (productsList) {
        return res.status(200).json({productsList});
    } else {
        return res.status(404).json({"message": `Can not find any post with category "${req.query.category}"`});
    }
}

module.exports = { handleGetAllProducts };