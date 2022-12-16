const models = require('../database/models/index')
const errors = require('../const/errors')
const signJWT = require('../middlewares/signJWT')
const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findOne({
                where: {
                    email: req.body.email
                },
                include: [{
                    model: models.medico
                }, {
                    model: models.paciente
                }]
            })
            // Si no existe el usuario o la contraseña no coincide
            if (!usuario || !bcrypt.compareSync(req.body.password, usuario.password)) {
                return next(errors.CredencialesInvalidas)
            }

            // Es paciente o médico?
            let rol = "paciente"
            if (usuario.medico) {
                rol = "medico"
            }

            // Generar el token
            res.json({
                success: true,
                data: {
                    token: signJWT(usuario, rol), // Creo el token con los datos del usuario
                    id: usuario.id,
                    rol: rol
                }
            })
        } catch (err) {
            return next(err)
        }

    },
    register: async (req, res, next) => {
        try {
            
            res.json({
                sucess: true,
                data: {
                    usuario: null
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}