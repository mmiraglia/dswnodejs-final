const models = require ('../database/models/index')
const errors = require('../const/errors')
const { sequelize } = require('../database/models/index')
const bcrypt = require('bcryptjs')

module.exports = {
    getAll: async (req, res) => {
        try {
            const pacientes = await models.paciente.findAll({
                include: [{
                    model: models.turno,
                    include: [{
                        model: models.tratamiento
                    }, {
                        model: models.medico
                    }]
                }]
            })
            res.json({
                sucess: true,
                data: {
                    pacientes: pacientes
                }
            })

            if (!pacientes) return next(errors.NoHayPacientes)

        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res, next) => {
        try {
            const result = await sequelize.transaction(async (t) => {
                // En una transacción creo el usuario (para obtener el id)
                const usuario = await models.usuario.create({
                    "email": req.body.email, 
                    "password": bcrypt.hashSync(req.body.password, 10)
                }, {transaction: t})
                if (usuario) {
                    // Le concateno el id generado anteriormente a los datos del body
                    const paciente_json = {
                        "id": usuario.id,
                        ...req.body
                    }
                    // Creo el paciente
                    const paciente = await models.paciente.create(paciente_json, {transaction: t})
                    res.json({
                        sucess: true,
                        data: {
                            id: paciente.id
                        }
                    })
                }
            })
        } catch (err) {
            next(err)
        }

    },
    get: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.id_paciente
                },
                include: [{
                    model: models.turno,
                    include: [{
                        model: models.tratamiento
                    }, {
                        model: models.medico
                    }]
                }]
            })
            
            if (!paciente) return next(errors.PacienteInexistente)

            res.json({
                sucess: true,
                data: {
                    paciente: paciente
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
}