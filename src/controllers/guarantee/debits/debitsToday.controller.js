const debitModel = require("../models/debit.model");
const dateCraft = require('date-craft');

async function debitsToday(sellerId) {
    try {
        const debits = await debitModel.find({ sellerId:sellerId });
        var debitsToday = 0;

        var newActualDate = dateCraft.getCurrentDate();

        debits.forEach(debit => {
            var givedToday = new Date(debit.firstPaymentDate).toISOString().split('T')[0] == newActualDate.toISOString().split('T')[0];

            if (givedToday) {
                debitsToday = parseFloat(debitsToday) + parseFloat(debit.originalValue);
            }
        });

        return debitsToday;
    } catch (error) {
        return error;
    }
}

module.exports = debitsToday;