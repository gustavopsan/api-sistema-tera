const productModel = require('../../../models/product.model');

async function listInactiveProducts(sellerId) {
    try {
        const products = await productModel.find({ sellerId: sellerId, isActive: false });

        return products
    } catch (error) {
        return error
    }
}

module.exports = listInactiveProducts;