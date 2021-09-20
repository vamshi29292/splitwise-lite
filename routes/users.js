var express = require('express');
var router = express.Router();
const { usersController } = require('../controllers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message: 'respond with a resource' });
});

router.post('/create', usersController.create);

module.exports = router;
