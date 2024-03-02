const router = require('express').Router();

const createDebit = require('../controllers/debit/createDebit.controller');
const listDebits = require('../controllers/debit/listDebits.controller');
const payDebit = require('../controllers/debit/payDebit.controller');
const getDebit = require('../controllers/debit/getDebit.controller');
const searchDebit = require('../controllers/debit/searchDebit.controller');

router.post('/debits/create', (req, res) => {
    const { sellerId, customerId, value, paymentsAmount, paymentsRemaing } = req.body;

    createDebit(sellerId, customerId, value, paymentsAmount, paymentsRemaing)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

router.post('/debits/list', (req, res) => {
    const { sellerId } = req.body;

    listDebits(sellerId)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

router.post('/debits/pay', (req, res) => {
    const { debitId, paidValue } = req.body;

    payDebit(debitId, paidValue)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

router.post('/debits/search', (req, res) => {
    const { queryString, sellerId } = req.body;

    searchDebit(queryString, sellerId)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/debits/find', (req, res) => {
    const { debitId } = req.body;

    getDebit(debitId)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router;