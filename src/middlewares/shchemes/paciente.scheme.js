const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fecha_nacimiento: Joi.date().optional()
})

module.exports = {
    crearPaciente
}