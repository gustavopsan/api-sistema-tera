const productModel = require('../../../models/product.model');

async function removeProduct(productId) {
    try {
        const product = await productModel.findByIdAndDelete(productId);

        if (!product) {
            return {
                message: 'PRODUCT_NOT_FOUND',
            }
        } else {
            return product;
        }
    } catch (error) {
        return error;
    }
}

module.exports = removeProduct;