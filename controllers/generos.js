const db = require("../database/models");

const controller = {
    
    getGeneros: function(req, res) {
        db.Generos.findAll({
            include: [{association: "canciones"}],
        }).then((generos) => {

            let newGeneros = [];

            generos.forEach((genero) => {
                console.log(genero.canciones)
                let canciones = genero.canciones.map((cancion) => {
                    return cancion.titulo;
                })

                newGeneros.push({
                    id: genero.id,
                    nombre: genero.nombre,
                    canciones: canciones
                })
            })

            let returnObject = {
                status: 200,
                generos: newGeneros,
            }

            res.json(returnObject);

        }).catch( (err) => {
            console.error(err);
            res.json({
                status: 407,
                mensaje: "Connection to database error"
            })
        })
    }

};

module.exports = controller;