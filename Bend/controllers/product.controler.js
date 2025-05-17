const product = require('../model/product.model');

const getProducts = async(req, res) => {
    try {
        const products = await product.find({});
        res.status(500).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts
}