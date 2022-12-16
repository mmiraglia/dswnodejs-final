const models = require('../database/models/index')
const errors = require('../const/errors')
const { sequelize } = require('../database/models/index')
const bcrypt = require('bcryptjs')

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
            const result = await sequelize.transaction(async (t) => {
                // En una transacción creo el usuario (para obtener el id)
                const usuario = await models.usuario.create({
                    "email": req.body.email, 
                    "password": bcrypt.hashSync(req.body.password, 10)
                }, {transaction: t})
                if (usuario) {
                    // Le concateno el id generado anteriormente a los datos del body
                    const medico_json = {
                        "id": usuario.id,
                        ...req.body
                    }
                    // Creo el médico
                    const medico = await models.medico.create(medico_json, {transaction: t})
                    res.json({
                        sucess: true,
                        data: {
                            id: medico.id
                        }
                    })
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