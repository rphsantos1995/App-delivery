const OrderRoleIds = {
  customer: {
    orderNum: 33,
    orderStats: 34,
    orderDate: 35,
    orderValue: 36,
  },
  seller: {
    orderNum: 48,
    orderStats: 49,
    orderDate: 50,
    orderValue: 51,
  },
};

const DetailRoleIds = {
  customer: {
    orderNum: 37,
    orderDate: 39,
    orderStatus: 40,
    itemNumber: 41,
    itemDescr: 42,
    itemQty: 43,
    itemUnitValue: 46,
    itemSubTotal: 44,
    orderTotal: 45,
  },
  seller: {
    orderNum: 54,
    orderDate: 56,
    orderStatus: 55,
    itemNumber: 59,
    itemDescr: 60,
    itemQty: 61,
    itemUnitValue: 62,
    itemSubTotal: 63,
    orderTotal: 64,
  },
};

module.exports = { OrderRoleIds, DetailRoleIds };
