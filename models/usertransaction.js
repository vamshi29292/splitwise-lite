'use strict';
const {
  Model
} = require('sequelize');
const Transaction = require('./transaction');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  class UserTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  UserTransaction.init({
    user_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    amount_paid: DataTypes.DECIMAL,
    user_split: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'UserTransaction',
  });
  return UserTransaction;
};