module.exports = {
    getAll: async (req, res) => {
        try {
            res.json({
                message: "Información de todos los tratamientos"
            })
        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res) => {
        try {
            res.json({
                message: "Tratamiento creado con id 22"
            })
        } catch (err) {
            console.log(err)
        }

    },
    get: async (req, res) => {
        try {
            res.json({
                message: "Información del Tratamiento " + req.params.id_tratamiento
            })
        } catch (err) {
            console.log(err)
        }
    },
}