const express = require('express');
const userRouter = require('../database/router/UserRouter');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', userRouter);

module.exports = app;
