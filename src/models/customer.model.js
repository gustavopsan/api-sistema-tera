const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        customerId: {
            type: 'Number',
            unique: true
        },
        sellerId: 'Number',
        name: 'String',
        address: 'Object',
        docId: 'Number',
        phone: 'String',
        route: 'Number',
        isActive: 'Boolean'
    },
    { timestamps: true }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;