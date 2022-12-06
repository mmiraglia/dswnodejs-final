const router = require('express').Router()
const turnoController = require('../controllers/turno.controller')

router.get('/:id_turno', turnoController.get)
router.get('/', turnoController.getAll)
router.post('/', turnoController.create)
router.patch('/', turnoController.update)

module.exports = router