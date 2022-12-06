const router = require('express').Router()
const pacienteController = require('../controllers/paciente.controller')
const validate = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/shchemes/paciente.scheme')

router.get('/:id_paciente', pacienteController.get)
router.get('/', pacienteController.getAll)
router.post('/', validate(pacienteScheme.crearPaciente), pacienteController.create)

module.exports = router