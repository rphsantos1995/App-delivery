const StatusCodes = require('http-status-codes');
const errorMessages = require('../../database/helpers/errorMessages');
const { createSale, getSales } = require('../services/salesService');

const create = async (req, res) => {
 try {
    const sale = await createSale(req.body);
    return res.status(StatusCodes.CREATED).json(sale);
 } catch (e) {
    console.log(e);
     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: errorMessages.INTERNAL });
 }
};

const read = async (req, res) => {
 try {
   const { id, role } = req.query;
   const sales = await getSales(id, role);
   return res.status(StatusCodes.OK).json(sales);
 } catch (e) {
    console.log(e);
     return res.status(StatusCodes.UNAUTHORIZED).json({ message: errorMessages.UNAUTHORIZED });
 }
};

module.exports = { create, read };
