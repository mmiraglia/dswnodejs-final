const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const validate = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/shchemes/usuario.scheme')

router.post('/login', validate(usuarioScheme.login), authController.login)

module.exports = router