module.exports = {
    getAll: async (req, res) => {
        try {
            res.json({
                message: "Información de todos los médicos"
            })
        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res) => {
        try {
            res.json({
                message: "Médico creado con id 44"
            })
        } catch (err) {
            console.log(err)
        }

    },
    get: async (req, res) => {
        try {
            res.json({
                message: "Información del Médico " + req.params.id_medico
            })
        } catch (err) {
            console.log(err)
        }
    },
}