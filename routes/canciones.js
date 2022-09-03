var express = require('express');
var router = express.Router();
const controller = require('../controllers/canciones.js')

/* GET home page. */
router.get('/', controller.getCanciones);

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', controller.getCancion);

router.put('/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
