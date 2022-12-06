const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    fecha_nacimiento: Joi.date().optional()
})

module.exports = {
    crearPaciente
}