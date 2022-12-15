'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [{
      id: 1,
      user_id: 3,
      seller_id: 2,
      total_price: 200,
      delivery_address: 'Rua Que existe de verdade',
      delivery_number: 123,
      sale_date: new Date(Date.now()),
      status: 'Entregue'
    },
    {
      id: 2,
      user_id: 3,
      seller_id: 2,
      total_price: 200,
      delivery_address: 'Rua Que existe de verdade',
      delivery_number: 123,
      sale_date: new Date(Date.now()),
      status: 'Em Trânsito'
    },
    {
      id: 3,
      user_id: 3,
      seller_id: 2,
      total_price: 200,
      delivery_address: 'Rua Que existe de verdade',
      delivery_number: 123,
      sale_date: new Date(Date.now()),
      status: 'Entregue'
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.bulkDelete('sales', null, {});
  }
};
