'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {}
  user.init({
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'user',
    tableName: 'users'
  });
  return user;
};