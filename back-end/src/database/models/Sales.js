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
    }
  }
  Sales.init({
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.INTEGER,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Sales',
    tableName: 'sales'
  });
  return Sales;
};