const debitModel = require("../models/debit.model");
const dateCraft = require('date-craft');

async function paymentsThisMonth(sellerId) {
    try {
        const debits = await debitModel.find({ sellerId:sellerId });
        var paymentsThisMonth = 0;

        var newActualDate = dateCraft.getCurrentDate();

        debits.forEach(debit => {
            debit.payments.forEach(payment => {
                var paidThisMonth = new Date(payment[0].date).getMonth() == newActualDate.getMonth();

                if (paidThisMonth) {
                    paymentsThisMonth = parseFloat(paymentsThisMonth) + parseFloat(payment[0].value);
                }
            })
        });

        return paymentsThisMonth;

    } catch (error) {
        return error;
    }
}

module.exports = paymentsThisMonth;