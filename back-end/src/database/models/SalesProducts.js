'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Products.belongsToMany(models.Sales, { through: this, as: 'sales' });
      models.Sales.belongsToMany(models.Products, { through: this, as: 'products' });
    }
  }
  SalesProducts.init({
    saleId: {type:DataTypes.INTEGER, primaryKey:true},
    productId: {type:DataTypes.INTEGER, primaryKey:true},
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'SalesProducts',
    tableName: 'sales_products',
    underscored: true
  });
  return SalesProducts;
};