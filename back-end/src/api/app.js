const express = require('express');
const cors = require('cors');
const productRouter = require('./router/ProductRouter');
const userRouter = require('./router/UserRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', userRouter);
app.use('/products', productRouter);

module.exports = app;
