const mongoose = require('mongoose');

const debitSchema = new mongoose.Schema(
    {
        debitId: {
            type: 'String',
            unique: true
        },
        sellerId: 'String',
        customerId: 'String',
        totalValue: 'Decimal',
        payments: 'Array',
        paymentsAmount: 'Number',
        paymentsRemaing: 'Number',
        isQuited: 'Boolean'
    },
    {
        timestamps: true
    }
);

const decimal2JSON = (v, i, prev) => {
    if (v !== null && typeof v === 'object') {
       if (v.constructor.name === 'Decimal128')
          prev[i] = parseFloat(v);
       else
          Object.entries(v).forEach(([key, value]) => decimal2JSON(value, key, prev ? prev[i] : v));
    }
};

debitSchema.set('toJSON', {
    transform: (doc, ret) => {
       decimal2JSON(ret);
       return ret;
    }
});

const Debit = mongoose.model('Debit', debitSchema);

module.exports = Debit;