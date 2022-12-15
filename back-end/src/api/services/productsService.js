const { Products } = require('../../database/models');

const findAllProducts = async () => {
  const products = Products.findAll();
  return products;
};

module.exports = { findAllProducts };
