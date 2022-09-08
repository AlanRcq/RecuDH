const controller = {

    error: function(req, res) {
        res.status(404).json({
            status: 404,
            mensaje: "Ups, parece que la ruta a la que intenta acceder no existe"
        })
    },

    home: function(req, res) {
        res.status(200).json({
            mensaje: "Bienvenido a la api de canciones!"
        })
    }

}

module.exports = controller;