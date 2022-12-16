const express = require('express')
const globalConstants = require('./const/globalConstants')
const routerConfig = require('./routes/index.routes')
const logger = require('morgan')
let errorHandler = require('./middlewares/error')
let createError = require('http-errors')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(logger('dev'))

    return;
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.routes_init())
    app.use('/', routerConfig.routes_auth())

    app.use(function(req, res, next) {
        next(createError(404))
    })

    app.use(errorHandler)

    return;
}


const init = () => {
    const app = express()
    configuracionApi(app)

    configuracionRouter(app)

    app.listen(globalConstants.PORT)
    console.log('La aplicación está corriendo en http://localhost:'+globalConstants.PORT)
}

init();