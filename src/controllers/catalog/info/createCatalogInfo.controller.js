const catalogInfoModel = require('../../../models/catalogInfo.model');

async function createCatalogInfo(sellerId, whatsappNumber, instaLink, catalogName, topoBannerUrl, openHour) {
    try {
        var records = await catalogInfoModel.findOne({ sellerId: sellerId });

        var exists = records.length > 0;

        if (exists) {
            return {
                message: 'INFO_ALREADY_REGISTERED'
            }
        } else {
            const catalogInfoCreated = await catalogInfoModel.create(
                {
                    sellerId,
                    whatsappNumber,
                    instaLink,
                    catalogName,
                    topoBannerUrl,
                    openHour
                }
            );

            return catalogInfoCreated
        }

    } catch (error) {
        return error
    }
}

module.exports = createCatalogInfo;