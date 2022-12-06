const models = require ('../database/models/index')
const errors = require('../const/errors')

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
    create: async (req, res) => {
        try {
            const paciente = await models.paciente.create(req.body)
            res.json({
                sucess: true,
                data: {
                    id: paciente.id
                }
            })
        } catch (err) {
            console.log(err)
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