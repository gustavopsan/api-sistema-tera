const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        sellerId: 'String',
        name: 'String',
        description: 'String',
        category: 'String',
        originalValue: 'Decimal',
        promotionalValue: 'Decimal',
        imagePath: 'String',
        isActive: 'boolean'
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

productSchema.set('toJSON', {
    transform: (doc, ret) => {
       decimal2JSON(ret);
       return ret;
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
