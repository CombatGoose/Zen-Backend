const Product = require("../../model/Product");

const handleGetProduct = async (req, res) => {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({"message": "Product id is required!"}); // Bad request

    const productCandidate = await Product.findOne({_id: productId});
    if (productCandidate) {
        res.status(200).json(productCandidate);
    } else {
        res.status(404).json({message: `Not found product with id: ${productId}`});
    }
}

module.exports = { handleGetProduct };