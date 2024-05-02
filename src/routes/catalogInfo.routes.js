const router = require('express').Router();

const createCatalogInfo = require('../controllers/catalog/info/createCatalogInfo.controller');
const getCatalogInfo = require('../controllers/catalog/info/getCatalogInfo.controller');
const updateCatalogInfo = require('../controllers/catalog/info/updateCatalogInfo.controller');

router.post('/cataloginfo/create', (req, res) => {
    const { sellerId, whatsappNumber, instaLink, catalogName, topoBannerUrl, openHour } = req.body;

    createCatalogInfo(sellerId, whatsappNumber, instaLink, catalogName, topoBannerUrl, openHour)
        .then(response => {
             res.json(response);
        })
        .catch(err => {
             res.json(err)
         })
})

router.post('/cataloginfo/get', (req, res) => {
    const { sellerId } = req.body;

    getCatalogInfo(sellerId)
       .then(response => {
            res.json(response);
        })
       .catch(err => {
            res.json(err)
        })
})

router.post('/cataloginfo/update', (req, res) => {
    const { sellerId, key, newvalue } = req.body;

    updateCatalogInfo(sellerId, key, newvalue)
        .then(response => {
             res.json(response);
         })
        .catch(err => {
             res.json(err)
         })
})

module.exports = router;