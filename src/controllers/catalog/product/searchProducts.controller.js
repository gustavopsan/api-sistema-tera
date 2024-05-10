const productModel = require('../../../models/product.model');

async function searchProduct(sellerId, queryString) {
    const product = await productModel.find({ sellerId: sellerId, name: { $regex: new RegExp(queryString), $options: 'i' }});
    return product;
}

module.exports = searchProduct;