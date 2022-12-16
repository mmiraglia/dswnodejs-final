const models = require('../database/models/index')
const errors = require('../const/errors')
const globalConstants = require('../const/globalConstants')

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
    subirEstudio: async (req, res, next) => {
        try {
            const turno = await models.turno.findOne({
                where: {
                    id: req.body.turnoId
                }
            })
            if (!turno) return next(errors.TurnoInexistente)

            const estudio = await models.estudio.findOne({
                where: {
                    turnoId: req.body.turnoId,
                    archivo: req.body.archivo
                }
            })
            if (!estudio) { 
                const estudio = await models.estudio.create({
                    nombre: req.body.nombre,
                    observaciones: req.body.observaciones,
                    archivo: req.file ? req.file.filename : null, 
                    archivo_nombre: req.file ? req.file.originalname : null, 
                    usuarioId: req.body.usuarioId,
                    turnoId: turno.id
                })
            } else {
                return next(errors.ArchivoDuplicado)
            }

            res.json({
                success: true,
                data: {
                    message: "Estudio cargado con éxito"
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    descargarEstudio: async (req, res, next) => {
        try {
            const turno = await models.turno.findOne({
                where: {
                    id: req.body.turnoId
                }
            })
            if (!turno) return next(errors.TurnoInexistente)

            const estudio = await models.estudio.findOne({
                where: {
                    turnoId: req.body.turnoId,
                    archivo_nombre: req.body.archivo_nombre
                }
            })
            if (!estudio) return next(errors.EstudioInexistente)

            res.download(globalConstants.PATH_ESTUDIOS + estudio.archivo, estudio.archivo_nombre)
        } catch (err) {
            return next(err)
        }
    }
}