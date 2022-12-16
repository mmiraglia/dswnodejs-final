const jwt = require('jsonwebtoken')
const globalConstants = require('../const/globalConstants')

module.exports = function (usuario, rol) {
    if (usuario) {
        const token = jwt.sign({ // Guardo el id y el rol para usar en el resto del API
            id: usuario.id,
            rol: rol
        },
        globalConstants.JWT_SECRET,
        {
            expiresIn: globalConstants.JWT_EXPIRES_IN 
        })
        return token
    } else {
        return null // si no hay usuario, devuelvo null
    }
}