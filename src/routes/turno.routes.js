const router = require('express').Router()
const turnoController = require('../controllers/turno.controller')

const globalConstants = require('../const/globalConstants') 
var multer = require('multer') 
var upload = multer({ 
    dest: globalConstants.PATH_ESTUDIOS, 
    limits: { fileSize: globalConstants.MAX_FILE_SIZE } 
})


router.post('/subirEstudio', upload.single('pdf'), turnoController.subirEstudio)
router.post('/descargarEstudio/', turnoController.descargarEstudio)
router.get('/:id_turno', turnoController.get)
router.get('/', turnoController.getAll)
router.post('/', turnoController.create)
router.patch('/', turnoController.update)

module.exports = router