const router = require('express').Router();

const createProduct = require('../controllers/catalog/product/createProduct.controller');
const listProducts = require('../controllers/catalog/product/listProducts.controller');
const updateProduct = require('../controllers/catalog/product/updateProduct.controller');
const getProduct = require('../controllers/catalog/product/getProduct.controller');

router.post('/product/create', (req, res) => {
    const { sellerId, name, description, category, originalValue, promotionalValue, imagePath } = req.body;

    createProduct(sellerId, name, description, category, originalValue, promotionalValue, imagePath)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/product/get', (req, res) => {
    const { productId } = req.body;

    getProduct(productId)
        .then(response => {
             res.json(response);
         })
        .catch(err => {
             res.json(err)
         })
})

router.post('/product/list', (req, res) => {
    const { sellerId } = req.body;

    listProducts(sellerId)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/product/update', (req, res) => {
    const { productId, key, newValue } = req.body;

    updateProduct(productId, key, newValue)
        .then(response => {
             res.json(response);
         })
        .catch(err => {
             res.json(err)
         })
})

module.exports = router;