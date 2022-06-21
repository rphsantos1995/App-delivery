'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users'});
      this.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
      this.belongsToMany(models.Products, {
        through: 'sales_products',
        as: 'sales',
        foreignKey: 'sale_id',
        otherKey: 'product_id',
      });
    }
  }
  Sales.init({
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(10,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.INTEGER,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Sales',
    tableName: 'sales',
    underscored: true
  });
  return Sales;
};