const router = require('express').Router();
const paletasController = require('../controllers/paletas.controller');
const { validId, validObjectBody } = require('../middlewares/paletas.middleware');

router.get('/', paletasController.findAllPaletas);
router.get('/:id', validId, paletasController.findByIdPaleta);
router.post('/', validObjectBody, paletasController.createPaleta);
router.put('/:id', validId, validObjectBody, paletasController.updatePaleta);
router.delete('/:id', validId, paletasController.deletePaleta);

module.exports = router;
