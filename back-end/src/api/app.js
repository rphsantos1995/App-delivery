const express = require('express');
const cors = require('cors');
const userRouter = require('./router/UserRouter');
const registerRouter = require('./router/registerRouter');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', userRouter);
app.use('/register', registerRouter);

module.exports = app;
