const catalogInfoModel = require('../../../models/catalogInfo.model');

async function createCatalogInfo(sellerId, whatsappNumber, instaLink, catalogName, topoBannerUrl) {
    try {
        var records = await catalogInfoModel.find({ sellerId: sellerId });

        console.log(records)

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
                    openHour: {},
                    paymentOptions: [],
                    deliveryValues: []
                }
            );

            return catalogInfoCreated
        }

    } catch (error) {
        return error
    }
}

module.exports = createCatalogInfo;