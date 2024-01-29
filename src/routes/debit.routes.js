const router = require('express').Router();

const createDebit = require('../controllers/debit/createDebit.controller');
const listDebits = require('../controllers/debit/listDebits.controller');
const payDebit = require('../controllers/debit/payDebit.controller');

router.post('/debits/create', (req, res) => {
    const { sellerId, customerId, totalValue, payments, paymentsAmount, paymentsRemaing } = req.body;

    createDebit(sellerId, customerId, totalValue, payments, paymentsAmount, paymentsRemaing)
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
    const { debitId, index } = req.body;

    payDebit(debitId, index)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

module.exports = router;