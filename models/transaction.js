'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsToMany(models.User, { through: models.UserTransaction, foreignKey: 'user_id' });
    }
    
    static async createWithUserMappings({ users, ...transactionData }) {
      try {
        const result = await sequelize.transaction( async t => {
          const createdTransaction = await Transaction.create({ ...transactionData})
          const userTransactionMappings = users.map(user => ({
            user_id: user.id, transaction_id: createdTransaction.id, amountPaid: user.amountPaid, userSplit: user.userSplit,
          }));
          const createdUsersTransactionMappings = await sequelize.models.UserTransaction.bulkCreate(userTransactionMappings, {returning: true})
          return { ...createdTransaction.dataValues, users: createdUsersTransactionMappings }
        })
        return result;
      } catch (e) {
        console.log("Error in transaction");
        throw(e);
      }
    }
  };
  Transaction.init({
    amount: { type: DataTypes.DECIMAL, allowNull: false, min: 0 },
    description: { type: DataTypes.STRING, allowNull: false },
    splitType: { type: DataTypes.STRING, defaultValue: 'equal'}
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};