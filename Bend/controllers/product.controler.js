const product = require('../model/product.model');

const getProduct = async(req, res) => {
    try {
        const products = await product.find({});
        res.status(500).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProducts = async(req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findById(id);
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;

        // Log the request
        console.log("Updating ID:", id);
        console.log("Data to update:", req.body);

        // Try updating
        const updatedProduct = await product.findByIdAndUpdate(
            id,
            req.body, {
                new: true, // Return the updated document
                runValidators: true // Re-run schema validators
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Update failed:", error.message);
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async(req, res) => {
    try {
        console.log("Request Body:", req.body); // 👈 log this to see what you're getting
        const createdProduct = await product.create(req.body);
        res.status(200).json({ createdProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const deteleProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({ message: "product deleted successfully", deletedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    createProduct,
    deteleProduct
}