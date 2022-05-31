'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    url_image: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Products',
    tableName: 'products'
  });
  return Products;
};