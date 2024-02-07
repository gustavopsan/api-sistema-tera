const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: "String",
            unique: true
        },
        docId: {
            type: 'String',
            unique: true
        },
        name: 'String',
        role: 'String',
        module: 'Array',
        phone: 'String',
        email: {
            type: "String",
            unique: true
        },
        password: 'String',
        isActive: 'Boolean'
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;