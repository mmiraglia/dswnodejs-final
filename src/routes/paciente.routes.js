const router = require('express').Router()
const pacienteController = require('../controllers/paciente.controller')

router.get('/:id_paciente', pacienteController.get)
router.get('/', pacienteController.getAll)
router.post('/', pacienteController.create)

module.exports = router