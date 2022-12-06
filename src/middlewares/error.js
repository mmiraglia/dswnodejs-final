const errors = require('../const/errors')

module.exports = function (err, req, res, next) {

    let response = {
        success: false,
        error: {
            code: err.code || 500,
            message: err.message || 'Internal server error'
        }
    }

    // Validation error from the model
    if (err.name === 'SequelizeValidationError') {
        let validationError = err.errors[0]
        response.error.code = errors['validationError'].code
        response.error.message = validationError.message
    }

    // CORS
    if (err.message === "Not allowed by CORS") {
        response.error.code = 403
    }

    // Sequelize connection error
    if (err.name === "SequelizeConnectionError") {
        response.error.code = 500
        response.error.message = 'Internal server error'
    }

    if (err.name ==="SequelizeUniqueConstraintError" ) {
        response.error.code = 500
        response.error.message = 'Unique contraint error'
    }

    if (err.isJoi) {
        let validationErrorType = err.details[0].type
        let errorKey = 'ValidationError'
     
        if (validationErrorType == 'any.required') {
            errorKey = 'FaltanCampos'
        }

        response.error = errors[errorKey]
    }

    if (err.message === "Not Found") {
        response.error.code = 404
        response.error.message = "Endpoint no encontrado"
    }

    res.status(200).json(response)
}