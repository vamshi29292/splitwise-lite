var express = require('express');
var router = express.Router();
const { transactionsController } = require('../controllers');

router.post('/', transactionsController.create);

module.exports = router;