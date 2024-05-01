const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
    {
        sellerId: 'String',
        categories: 'Array'
    },
    {
        timestamps: true
    }
);

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;