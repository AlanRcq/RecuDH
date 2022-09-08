var express = require('express');
var router = express.Router();
const controller = require('../controllers/canciones.js')
const { validacionPost, validacionPut } = require('../middlewares/cancionValidator.js')

/* GET home page. */
router.get('/', controller.getCanciones);

router.post('/', validacionPost, controller.postCanciones);

router.get('/:id', controller.getCancion);

router.put('/:id', validacionPut, controller.putCanciones);

router.delete('/:id', controller.deleteCanciones);

module.exports = router;
