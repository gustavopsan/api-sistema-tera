const debitModel = require("../models/debit.model");
const dateCraft = require('date-craft');

async function debitsThisMonth(sellerId) {
    try {
        const debits = await debitModel.find({ sellerId:sellerId });
        var debitsThisMonth = 0;

        var newActualDate = dateCraft.getCurrentDate();;

        debits.forEach(debit => {
            var createdThisMonth = new Date(debit.firstPaymentDate).getMonth() == newActualDate.getMonth();

            if (createdThisMonth) {
                debitsThisMonth = parseFloat(debitsThisMonth) + parseFloat(debit.originalValue);
            }
        })
    } catch (error) {
        return error;
    }
}

module.exports = debitsThisMonth;