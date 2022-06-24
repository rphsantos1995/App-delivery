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
    include: [
      { association: 'seller', attributes: ['name'] },
      'products',
    ],
    attributes: { exclude: ['seller_id', 'user_id'] },
    where: isAdmin ? {} : {
      [isSeller ? 'sellerId' : 'userId']: id,
    },
  });
  return sales;
};

const getSaleById = async (id) => {
  const sales = await Sales.findByPk(id, {
    include: [
      { association: 'seller', attributes: ['name'] },
      'products',
    ],
    attributes: { exclude: ['seller_id', 'user_id'] },
  });
  return sales;
};

const updateSaleStatus = async (id, status) => {
  const sale = await Sales.findByPk(id, { attributes: ['id', 'status'] });
  await sale.update({ status });
  return sale;
};

module.exports = { createSale, getSales, getSaleById, updateSaleStatus };
