const express = require('express');
const cors = require('cors');
const registerRouter = require('./router/registerRouter');
const productRouter = require('./router/ProductRouter');
const userRouter = require('./router/UserRouter');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', userRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);

module.exports = app;
