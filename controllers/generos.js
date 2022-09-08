const db = require("../database/models");
const { sendConnectionError } = require('../helpers/errorHelper');

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
                    nombre: genero.name,
                    canciones: canciones
                })
            })

            let returnObject = {
                status: 200,
                generos: newGeneros,
            }

            res.status(200).json(returnObject);

        }).catch( (err) => {
            sendConnectionError(res, err);
        })
    }

};

module.exports = controller;