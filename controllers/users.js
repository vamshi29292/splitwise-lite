const { User } = require('../models');

const create = async (req, res) => {
  try {
    const createdUser = await User.create({ name: req.body.name, email: req.body.email })
    res.status(200).json(createdUser)
  } catch(e) {
    console.log(e)
    res.status(400).json({ message: e })
  }
}

module.exports = {
  create
}