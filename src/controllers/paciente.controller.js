module.exports = {
    getAll: async (req, res) => {
        try {
            res.json({
                message: "Información de todos los pacientes"
            })
        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res) => {
        try {
            res.json({
                message: "Paciente creado con id 1234"
            })
        } catch (err) {
            console.log(err)
        }

    },
    get: async (req, res) => {
        try {
            res.json({
                message: "Información del paciente " + req.params.id_paciente
            })
        } catch (err) {
            console.log(err)
        }
    },
}