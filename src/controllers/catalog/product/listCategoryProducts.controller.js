const productModel = require('../../../models/product.model');

async function listCategoryProducts(sellerId, category) {
    try {
        const products = await productModel.find({ sellerId: sellerId, category: category });

        return products;
    } catch (error) {
        return error
    }
}

module.exports = listCategoryProducts;