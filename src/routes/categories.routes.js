const router = require('express').Router();

const setCategories = require('../controllers/catalog/categories/setCategories.controller');
const getCategories = require('../controllers/catalog/categories/getCategories.controller');
const updateCategories = require('../controllers/catalog/categories/updateCategories.controller');

router.post('/categories/set', (req, res) => {
    const { sellerId, categories } = req.body;

    setCategories(sellerId, categories)
       .then(response => {
            res.json(response);
        })
       .catch(err => {
            res.json(err)
        })
})

router.post('/categories/get', (req, res) => {
    const { sellerId } = req.body;

    getCategories(sellerId)
       .then(response => {
            res.json(response);
        })
       .catch(err => {
            res.json(err)
        })
})

router.post('/categories/update', (req, res) => {
    const { sellerId, categories } = req.body;

    updateCategories(sellerId, categories)
       .then(response => {
            res.json(response);
        })
       .catch(err => {
            res.json(err)
        })
})

module.exports = router;