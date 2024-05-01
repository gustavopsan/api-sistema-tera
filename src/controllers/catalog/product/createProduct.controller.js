const productModel = require('../../../models/product.model');

async function createProduct(sellerId, name, description, category, originalValue, promotionalValue, imagePath) {
    try {
        const productCreated = await productModel.create(
            {
                sellerId,
                name,
                description,
                category,
                originalValue,
                promotionalValue,
                imagePath,
                isActive: true
            }
        );

        return productCreated;
    } catch (error) {
        return error
    }
}

module.exports =  createProduct;