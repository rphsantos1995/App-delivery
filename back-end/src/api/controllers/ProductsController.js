const StatusCodes = require('http-status-codes');
const errorMessages = require('../../database/helpers/errorMessages');
const { findAllProducts } = require('../services/productsService');

const getAll = async (_req, res) => {
 try {
    const products = await findAllProducts();
    return res.status(StatusCodes.OK).json(products);
 } catch (e) {
    console.log(e);
     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e });
 }
};

module.exports = { getAll };
