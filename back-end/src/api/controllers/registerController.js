const {
    StatusCodes:
    {
        INTERNAL_SERVER_ERROR,
    } } = require('http-status-codes');
const { createUser } = require('../services/registerService');
const { INTERNAL } = require('../helpers/errorMessages');

const create = async (req, res) => { 
    try {
        const { name, email, password } = req.body;
        const { status, data } = await createUser(name, email, password);
        return res.status(status).json(data);
    } catch (err) {
        console.log(err);
        return res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL });
    }
};

module.exports = { create };
