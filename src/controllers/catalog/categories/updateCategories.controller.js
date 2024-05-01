const categoriesModel = require('../../../models/categories.model');

async function updateCategories(sellerId, categories) {
    try {
        const newCategories = await categoriesModel.findOneAndUpdate(
            { sellerId: sellerId },
            { categories: categories },
            { new: false }
        );

        if (newCategories) {
            const categoriesUpdated = await categoriesModel.findOne({ sellerId: sellerId });

            return categoriesUpdated;
        }

    } catch (error) {
        return error
    }
}

module.exports = updateCategories;