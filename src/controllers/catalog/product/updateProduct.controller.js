const productModel = require('../../../models/product.model');

async function updateProduct(productId, key, newValue) {
    try {
        const product = await productModel.findByIdAndUpdate(
            { _id: productId },
            { [key]: newValue },
            { new: false }
        )

        if (product) {
            const productUpdated = await productModel.findById(
                { _id: productId }
            );

            return productUpdated;
        }
    } catch (error) {
        return error
    }
}

module.exports = updateProduct;