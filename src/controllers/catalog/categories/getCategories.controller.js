const categoriesModel = require('../../../models/categories.model');

async function getCategories(sellerId) {
    try {
        const categories = await categoriesModel.findOne({ sellerId: sellerId });

        return categories;
    } catch (error) {
        return error
    }
}

module.exports = getCategories;