const productModel = require('../../../models/product.model');

async function listProducts(sellerId) {
    try {
        const products = await productModel.find({ sellerId: sellerId, isActive: true });

        return products
    } catch (error) {
        return error
    }
}

module.exports = listProducts;