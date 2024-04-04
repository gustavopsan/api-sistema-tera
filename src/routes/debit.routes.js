const router = require('express').Router();
const dateCraft = require('date-craft');

const createDebit = require('../controllers/debit/createDebit.controller');
const listDebits = require('../controllers/debit/listDebits.controller');
const payDebit = require('../controllers/debit/payDebit.controller');
const getDebit = require('../controllers/debit/getDebit.controller');
const searchDebit = require('../controllers/debit/searchDebit.controller');
const revokeDebitPayment = require('../controllers/debit/revokeDebitPayment.controller');
const loadGeneralData = require('../controllers/loadGeneralData.controller');
const listCustomerDebits = require('../controllers/debit/listCustomerDebits.controller');

router.post('/debits/create', (req, res) => {
    const { sellerId, customerId, value, paymentsAmount, paymentsRemaing, paymentModel, firstPaymentDate } = req.body;

    createDebit(sellerId, customerId, value, paymentsAmount, paymentsRemaing, paymentModel, firstPaymentDate)
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
    const { debitId, paidValue, paymentMethod } = req.body;

    payDebit(debitId, paidValue, paymentMethod)
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

router.post('/debits/revokeDebitPayment', (req, res) => {
    const { debitId, paymentIndex } = req.body;

    revokeDebitPayment(debitId, paymentIndex)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
})

router.post('/debits/listCustomerDebits', (req, res) => {
    const { sellerId, customerId } = req.body;

    listCustomerDebits(sellerId, customerId)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
})

router.post('/debits/loadGeneralData', (req, res) => {
    const { sellerId } = req.body;

    loadGeneralData(sellerId)
       .then(response => {
            res.json(response);
        })
       .catch(error => {
            res.json(error)
        })
})

router.get('/debits/debug', (req, res) => {
    var newActualDate = dateCraft.getCurrentDate();;

    res.json(newActualDate)
})

module.exports = router;