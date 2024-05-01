const catalogInfoModel = require('../../../models/catalogInfo.model');

async function getCatalogInfo(sellerId) {
    try {
        var catalogInfo = await catalogInfoModel.findOne({ sellerId: sellerId });

        if (catalogInfo) {
            return catalogInfo;
        } else {
            return {
                message: "CATALOG_NOT_FOUND"
            }
        }
    } catch (error) {
        return error
    }
}

module.exports = getCatalogInfo;