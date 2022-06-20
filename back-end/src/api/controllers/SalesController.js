const StatusCodes = require('http-status-codes');
const errorMessages = require('../../database/helpers/errorMessages');
const { createSale } = require('../services/salesService');

const create = async (req, res) => {
 try {
    const sale = await createSale(req.body);
    return res.status(StatusCodes.CREATED).json(sale);
 } catch (e) {
    console.log(e);
     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: errorMessages.INTERNAL });
 }
};

module.exports = { create };
