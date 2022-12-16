const { Router } = require('express')
const pacienteRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')
const turnoRoutes = require('./turno.routes')
const authRoutes = require('./auth.routes')
const decodeJWT = require('../middlewares/decodeJWT')

const routes_init = () => {
    const router = Router()

    router.use('/pacientes', decodeJWT, pacienteRoutes)
    router.use('/medicos', decodeJWT, medicoRoutes)
    router.use('/tratamientos', decodeJWT, tratamientoRoutes)
    router.use('/turnos', decodeJWT, turnoRoutes)

    return router
}

const routes_auth = () => {
    const router = Router()

    router.use('/auth', authRoutes)

    return router
}

module.exports = { routes_init, routes_auth }