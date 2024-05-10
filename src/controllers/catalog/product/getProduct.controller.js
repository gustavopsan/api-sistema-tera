const productModel = require('../../models/product.model');

async function getProduct(productId) {
    const product = await productModel.findOne({ _id: productId });

    if (!product) {
        return {
            message: 'PRODUCT_NOT_FOUND',
        }
    } else {
        return product;
    }
}

module.exports = getProduct;