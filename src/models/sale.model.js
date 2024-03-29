const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema(
    {
        saleId: {
            type: 'Number',
            unique: true
        },
        clientId: 'String',
        sellerId: 'String',
        date: 'String',
        products: 'Array',
        totalValue: 'Decimal',
        paymentMethod: 'String',
        payments: 'Array'
    },
    { timestamps: true }
);

const decimal2JSON = (v, i, prev) => {
    if (v !== null && typeof v === 'object') {
       if (v.constructor.name === 'Decimal128')
          prev[i] = parseFloat(v);
       else
          Object.entries(v).forEach(([key, value]) => decimal2JSON(value, key, prev ? prev[i] : v));
    }
};

saleSchema.set('toJSON', {
    transform: (doc, ret) => {
       decimal2JSON(ret);
       return ret;
    }
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;