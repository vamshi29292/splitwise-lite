const { User, Transaction } = require('../models');

const create = async (req, res) => {
  try {
    const createdUser = await User.create({ name: req.body.name, email: req.body.email })
    res.status(200).json(createdUser)
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

const getTransactions = async (req, res) => {
  try {
    const userId = req.params.id;
    const transactions = await User.findByPk(userId, {
      include: [
        { model: Transaction }
      ]
    })
    res.status(200).json(transactions);
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

module.exports = {
  create,
  getTransactions,
}