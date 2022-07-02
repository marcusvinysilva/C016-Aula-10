const router = require('express').Router();
const paletasController = require('../controllers/paletas.controller');

router.get('/', paletasController.findAllPaletas);
router.get('/:id', paletasController.findByIdPaleta);
router.post('/', paletasController.createPaleta);
router.put('/:id', paletasController.updatePaleta);
router.delete('/:id', paletasController.deletePaleta);

module.exports = router;
