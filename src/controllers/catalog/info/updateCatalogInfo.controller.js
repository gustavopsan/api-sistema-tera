const catalogInfoModel = require('../../../models/catalogInfo.model');

async function updateCatalogInfo(sellerId, key, newvalue) {
    try {
        const catalogInfo = await catalogInfoModel.findOneAndUpdate(
            { sellerId: sellerId },
            { [key]: newvalue },
            { new: false }
        )

        if (catalogInfo) {
            const catalogInfoUpdated = await catalogInfoModel.findOne({ sellerId: sellerId });

            return catalogInfoUpdated;
        }
    } catch (error) {
        return error;
    }
}

module.exports = updateCatalogInfo;