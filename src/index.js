const express = require('express')
const globalConstants = require('./const/globalConstants')
const routerConfig = require('./routes/index.routes')
const logger = require('morgan')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(logger('dev'))

    return;
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.routes_init())

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