const { Router } = require('express')
const pacienteRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')

const routes_init = () => {
    const router = Router()

    router.use('/pacientes', pacienteRoutes)
    router.use('/medicos', medicoRoutes)
    router.use('/tratamientos', tratamientoRoutes)

    return router
}

module.exports = { routes_init }