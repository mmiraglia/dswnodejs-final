const Joi = require('joi')

let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    especialidad: Joi.string().optional(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = {
    crearMedico
}