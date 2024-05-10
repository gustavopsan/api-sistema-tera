const router = require('express').Router();

const createProduct = require('../controllers/catalog/product/createProduct.controller');
const listProducts = require('../controllers/catalog/product/listProducts.controller');
const updateProduct = require('../controllers/catalog/product/updateProduct.controller');
const getProduct = require('../controllers/catalog/product/getProduct.controller');
const removeProduct = require('../controllers/catalog/product/removeProduct.comtroller');
const listInactiveProducts = require('../controllers/catalog/product/listInactiveProducts.controller');
const searchProduct = require('../controllers/catalog/product/searchProducts.controller');

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

router.post('/product/search', (req, res) => {
    const { sellerId, queryString } = req.body;

    searchProduct(sellerId, queryString)
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

router.post('/product/listInactive', (req, res) => {
    const { sellerId } = req.body;

    listInactiveProducts(sellerId)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/product/remove', (req, res) => {
    const { productId } = req.body;

    removeProduct(productId)
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