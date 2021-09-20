var express = require('express');
var router = express.Router();
const { usersController } = require('../controllers');

router.post('/create', usersController.create);

router.get('/:id/transactions', usersController.getTransactions);


module.exports = router;
