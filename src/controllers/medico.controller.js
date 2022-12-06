const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    getAll: async (req, res) => {
        try {
            const medicos = await models.medico.findAll({
                include: [{
                    model: models.turno,
                    include: [{
                        model: models.tratamiento
                    }, {
                        model: models.paciente
                    }]
                }]
            })
            res.json({
                sucess: true,
                data: {
                    medicos: medicos
                }
            })

            if (!medicos) return next(errors.NoHayMedicos)

        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res) => {
        try {
            const medico = await models.medico.create(req.body)
            res.json({
                sucess: true,
                data: {
                    id: medico.id
                }
            })
        } catch (err) {
            console.log(err)
        }

    },
    get: async (req, res, next) => {
        try {
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.id_medico
                },
                include: [{
                    model: models.turno,
                    include: [{
                        model: models.tratamiento
                    }, {
                        model: models.paciente
                    }]
                }]
            })
            
            if (!medico) return next(errors.MedicoInexistente)

            res.json({
                sucess: true,
                data: {
                    medico: medico
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
}