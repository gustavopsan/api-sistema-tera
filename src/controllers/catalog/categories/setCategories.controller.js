const categoriesModel = require('../../../models/categories.model');

async function setCategories(sellerId, categories) {
    try {
        const categoriesCreated = await categoriesModel.create(
            {
                sellerId,
                categories
            }
        );

        return categoriesCreated
    } catch (error) {
        return error
    }
}

module.exports = setCategories;