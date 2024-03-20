const debitModel = require("../models/debit.model");

Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

async function loadGeneralData(sellerId) {
    try {
        const debits = await debitModel.find({sellerId: sellerId});
        var paymentsToday = 0;
        var paymentsThisWeek = 0;
        var creditsToday = 0;
        var creditsthisWeek = 0;
        var paymentsThisMonth = 0;
        var creditsthisMonth = 0;

        var actualDate = new Date();
        actualDate.setHours(actualDate.getHours() - 7);

        debits.forEach(debit => {

            var createdToday = new Date(debit.firstPaymentDate).toISOString().split('T')[0] === actualDate.toISOString().split('T')[0];
            var createdThisWeek = new Date(debit.firstPaymentDate).getWeek() === new Date().getWeek();

            if (createdToday) {
                creditsToday = creditsToday + parseFloat(debit.totalValue);
            }

            if (createdThisWeek) {
                creditsthisWeek = creditsthisWeek + parseFloat(debit.totalValue);
            }

            if (new Date(debit.firstPaymentDate).getMonth() === new Date().getMonth()) {
                creditsthisMonth = creditsthisMonth + parseFloat(debit.totalValue);
            }

            debit.payments.forEach(payment => {
                if (new Date(payment[0].date).toString().split('T')[0] === new Date().toString().split('T')[0]) { 
                    paymentsToday = paymentsToday + parseFloat(payment[0].value);
                }

                if (new Date(payment[0].date).getWeek() === new Date().getWeek()) {
                    paymentsThisWeek = paymentsThisWeek + parseFloat(payment[0].value);
                }

                if (new Date(payment[0].date).getMonth() === new Date().getMonth()) {
                    paymentsThisMonth = paymentsThisMonth + parseFloat(payment[0].value);
                }

            })
            
        })

        return {
            paymentsToday: paymentsToday,
            paymentsThisWeek: paymentsThisWeek,
            creditsToday: creditsToday,
            creditsthisWeek: creditsthisWeek,
            paymentsThisMonth: paymentsThisMonth,
            creditsthisMonth: creditsthisMonth
        }
    } catch (error) {
      return error
    }
}
 
module.exports = loadGeneralData;