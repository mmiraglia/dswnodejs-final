const router = require('express').Router()
const tratamientoController = require('../controllers/tratamiento.controller')

router.get('/:id_tratamiento', tratamientoController.get)
router.get('/', tratamientoController.getAll)
router.post('/', tratamientoController.create)

module.exports = router