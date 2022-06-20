const { Sales, SalesProducts } = require('../../database/models');

function formatProducts(prod) {
  const formatedProduct = { ...prod.dataValues };
  delete formatedProduct.SalesProducts;
  formatedProduct.quantity = prod.dataValues.SalesProducts.quantity;
  return formatedProduct;
}

const createSale = async ({ saleInfo, products }) => {
  const newSale = { ...saleInfo, saleDate: Date.now() };
  const sale = await Sales.create(newSale);
  const saleId = sale.id;
  const salesProducts = products.map(({ productId, quantity }) =>
    SalesProducts.create({ saleId, productId, quantity }));
  await Promise.all(salesProducts);
  const { dataValues } = await Sales.findByPk(saleId, { include: 'products' });
  dataValues.products = dataValues.products.map(formatProducts);
  return dataValues;
};

const getSales = async (id, role) => {
  const isAdmin = role === 'administrador';
  const isSeller = role === 'seller';
  const sales = await Sales.findAll({
    include: 'products',
    where: isAdmin ? {} : {
      [isSeller ? 'sellerId' : 'userId']: id,
    },
  });
  return sales;
};

module.exports = { createSale, getSales };
