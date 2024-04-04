const debitModel = require("../../models/debit.model");

async function allDebitsThisMonth(sellerId) {
    try {
        const debits = await debitModel.find({ sellerId:sellerId });
        var originalValue = 0;
        var debitsThisMonth = 0;

        debits.forEach(debit => {
            originalValue = parseFloat(originalValue) + parseFloat(debit.originalValue);
        });

        debitsThisMonth = originalValue + ((originalValue / 100) * 20);

        return debitsThisMonth;

    } catch (error) {
        return error;
    }
}

module.exports = allDebitsThisMonth;