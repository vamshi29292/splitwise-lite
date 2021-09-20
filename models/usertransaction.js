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
    userId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    amountPaid: DataTypes.DECIMAL,
    userSplit: DataTypes.DECIMAL,
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  }, {
    sequelize,
    modelName: 'UserTransaction',
  });
  return UserTransaction;
};