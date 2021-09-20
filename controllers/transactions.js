const { Transaction, UserTransaction, sequelize } = require('../models');

const create = async (req, res) => {
  try {
    const result = await Transaction.createWithUserMappings(req.body);
    res.status(200).json(result);
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: "Internal Server Error" })
  }
};

module.exports = {
  create
}