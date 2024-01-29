const debitModel = require('../../models/debit.model');

async function payDebit(debitId, index) {
    try {
        const debit = await debitModel.findOne({debitId: debitId});
        var payments = debit.payments;
        var selectedPayment = payments[index];

        selectedPayment[0].paid = true;

        const debitUpdated = await debitModel.findOneAndUpdate(
            { debitId: debitId },
            { payments: payments },
            { new: false }
        );

        return debitUpdated;
        
    } catch (error) {
        return error;
    }
}

module.exports = payDebit;