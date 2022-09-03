var express = require('express');
var router = express.Router();
const controller = require('../controllers/generos');

/* GET home page. */
router.get('/', controller.getGeneros);

module.exports = router;
