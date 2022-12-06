const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    getAll: async (req, res) => {
        try {
            const tratamientos = await models.tratamiento.findAll()
            res.json({
                sucess: true,
                data: {
                    tratamientos: tratamientos
                }
            })

            if (!tratamientos) return next(errors.NoHayTratamiento)

        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res) => {
        try {
            const tratamiento = await models.tratamiento.create(req.body)
            res.json({
                sucess: true,
                data: {
                    id: tratamiento.id
                }
            })
        } catch (err) {
            console.log(err)
        }

    },
    get: async (req, res, next) => {
        try {
            const tratamiento = await models.tratamiento.findOne({
                where: {
                    id: req.params.id_tratamiento
                }
            })
            
            if (!tratamiento) return next(errors.TratamientoInexistente)

            res.json({
                sucess: true,
                data: {
                    tratamiento: tratamiento
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
}