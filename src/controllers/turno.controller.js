const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    getAll: async (req, res) => {
        try {
            const turnos = await models.turno.findAll({
                include: [{
                    model: models.paciente,
                }, {
                    model: models.tratamiento
                }, {
                    model: models.medico
                }]
            })
            res.json({
                sucess: true,
                data: {
                    turnos: turnos
                }
            })

            if (!turnos) return next(errors.NoHayTurno)

        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res, next) => {
        try {
            const turno = await models.turno.create(req.body)
            res.json({
                sucess: true,
                data: {
                    id: turno.id
                }
            })
        } catch (err) {
            next(err)
        }

    },
    get: async (req, res, next) => {
        try {
            const turno = await models.turno.findOne({
                where: {
                    id: req.params.id_turno
                },
                include: [{
                    model: models.paciente,
                }, {
                    model: models.tratamiento
                }, {
                    model: models.medico
                }]
            })
            
            if (!turno) return next(errors.TurnoInexistente)

            res.json({
                sucess: true,
                data: {
                    turno: turno
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
    update: async (req, res, next) => {
        try {
            let turno = await models.turno.findOne({
                where: {
                    id: req.body.id
                }
            })
            
            if (!turno) return next(errors.TurnoInexistente)

            turno.set({
                tratamientoId: req.body.tratamientoId,
                observaciones: req.body.observaciones
            })

            turno = await turno.save();

            res.json({
                sucess: true,
                data: {
                    turno: turno
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },
}