const router = require('express').Router()
const medicoController = require('../controllers/medico.controller')

router.get('/:id_medico', medicoController.get)
router.get('/', medicoController.getAll)
router.post('/', medicoController.create)

module.exports = router