require('dotenv').config();

// Main Dependencies
const express = require('express');
const CORS = require("cors");
const bodyParser = require('body-parser');
const app = express();

//Routes
const userRoutes = require('./routes/user.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    app.use(CORS());
    next();
})

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: 'active',
        message: 'API Initialized'
    })
})

app.use(userRoutes);

require('../src/modules/databaseConnection.module');

app.listen(PORT);