const { Router } = require('express')
const pacienteRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')
const turnoRoutes = require('./turno.routes')

const routes_init = () => {
    const router = Router()

    router.use('/pacientes', pacienteRoutes)
    router.use('/medicos', medicoRoutes)
    router.use('/tratamientos', tratamientoRoutes)
    router.use('/turnos', turnoRoutes)

    return router
}

module.exports = { routes_init }