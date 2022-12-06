const router = require('express').Router()
const medicoController = require('../controllers/medico.controller')
const validate = require('../middlewares/validate')
const medicoScheme = require('../middlewares/shchemes/medico.scheme')

router.get('/:id_medico', medicoController.get)
router.get('/', medicoController.getAll)
router.post('/', validate(medicoScheme.crearMedico), medicoController.create)

module.exports = router