'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};