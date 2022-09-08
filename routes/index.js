var express = require('express');
var router = express.Router();
const controller = require('../controllers/index.js')

router.get('/', controller.home)

//Error para ruta inválida
router.all('/*', controller.error)

module.exports = router;
