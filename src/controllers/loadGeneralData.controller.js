const debitModel = require("../models/debit.model");
const dateCraft = require('date-craft');

async function loadGeneralData(sellerId) {
    try {
        const debits = await debitModel.find({sellerId: sellerId});
        var paymentsToday = 0;
        var paymentsThisWeek = 0;
        var creditsToday = 0;
        var creditsThisWeek = 0;
        var paymentsThisMonth = 0;
        var creditsThisMonth = 0;

        var newActualDate = dateCraft.getCurrentDate();
        newActualDate.setHours(newActualDate.getHours() - 3);
        var startOfWeek = dateCraft.getStartOfWeek(newActualDate);
        var endOfWeek = dateCraft.getEndOfWeek(newActualDate);

        debits.forEach(debit => {
            var createdToday = debit.firstPaymentDate.split('T')[0] == newActualDate.toISOString().split('T')[0];
            var createdThisWeek = debit.firstPaymentDate.split('T')[0] >= startOfWeek.toISOString().split('T')[0] && debit.firstPaymentDate.split('T')[0] <= endOfWeek.toISOString().split('T')[0];
            var createdThisMonth = new Date(debit.firstPaymentDate).getMonth() == newActualDate.getMonth();

            if (createdToday) {
                creditsToday = parseFloat(creditsToday) + parseFloat(debit.totalValue);
            }

            if (createdThisWeek) {
                creditsThisWeek = parseFloat(creditsThisWeek) + parseFloat(debit.totalValue);
            }

            if (createdThisMonth) {
                creditsThisMonth = parseFloat(creditsThisMonth) + parseFloat(debit.totalValue);
            }

            debit.payments.forEach(payment => {
                var paidToday = payment[0].date.split('T')[0] == newActualDate.toISOString().split('T')[0];
                var paidThisWeek = payment[0].date.split('T')[0] >= startOfWeek.toISOString().split('T')[0] && payment[0].date.split('T')[0] <= endOfWeek.toISOString().split('T')[0];
                var paidThisMonth = new Date(payment[0].date).getMonth() == newActualDate.getMonth();

                if (paidToday) {
                    paymentsToday = parseFloat(paymentsToday) + parseFloat(payment[0].value);
                }

                if (paidThisWeek) {
                    paymentsThisWeek = parseFloat(paymentsThisWeek) + parseFloat(payment[0].value);
                }

                if (paidThisMonth) {
                    paymentsThisMonth = parseFloat(paymentsThisMonth) + parseFloat(payment[0].value);
                }
            })

            
        })

        return {
            paymentsToday: paymentsToday,
            paymentsThisWeek: paymentsThisWeek,
            paymentsThisMonth: paymentsThisMonth,
            creditsToday: creditsToday,
            creditsThisWeek: creditsThisWeek,
            creditsThisMonth: creditsThisMonth
        }

    } catch(error) {
      return error
    }
}
 
module.exports = loadGeneralData;