const { Transaction, User } = require('../models');

const create = async (req, res) => {
  try {
    const result = await Transaction.createWithUserMappings(req.body);
    res.status(200).json(result);
  } catch(e) {
    console.log(e)
    res.status(500).json({ message: "Internal Server Error" })
  }
};

const getById = async (req, res) => {
  try {
    const result = await Transaction.findByPk(req.params.id, {
      include: [
        { model: User, through: { attributes: ["amountPaid", "userSplit"]}, attributes: ["id", "name", "email"], all: true }
      ]
    });
    res.status(200).json(result);
  } catch(e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  create,
  getById,
}