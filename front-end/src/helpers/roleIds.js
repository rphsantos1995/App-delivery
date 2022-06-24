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
    orderNum: 53,
    orderDate: 55,
    orderStatus: 54,
    itemNumber: 58,
    itemDescr: 59,
    itemQty: 60,
    itemUnitValue: 61,
    itemSubTotal: 62,
    orderTotal: 63,
  },
};

module.exports = { OrderRoleIds, DetailRoleIds };
