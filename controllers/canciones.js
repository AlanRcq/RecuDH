const db = require("../database/models");

const controller = {

    getCanciones: function(req, res) {
        
        db.Canciones.findAll({
            include: [{ association: "album" }, {association: "artista"}, {association: "genero"}]
        }).then((canciones) => {
            let newCanciones = [];
            
            console.log(canciones)

            canciones.forEach(function(cancion){
                newCanciones.push({
                    id: cancion.id,
                    titulo: cancion.titulo,
                    duracion: cancion.duracion,
                    album: cancion.album.nombre,
                    artista: cancion.artista.nombre + cancion.artista.apellido,
                    genero: cancion.genero.name
                });
            })

            let returnObject = {
                status: 200,
                canciones: newCanciones
            }

            res.json(returnObject);
        }).catch((err) => 
        {
            console.err(err);
            res.json({
            status: 408 
            })
        })

    },

    getCancion: function(req, res) {
        let cancionPk = req.params.id;
        db.Canciones.findByPk(
            cancionPk, 
            {
            include: [{ association: "album" }, {association: "artista"}, {association: "genero"}]
            } ).then((cancion) => {
            let returnObject = {
                status: 200,
                cancion: {
                    id: cancion.id,
                    titulo: cancion.titulo,
                    duracion: cancion.duracion,
                    album: cancion.album.nombre,
                    artista: cancion.artista.nombre + cancion.artista.apellido,
                    genero: cancion.genero.name
                }
            }
            
            res.json(returnObject);
        }).catch((err) => {
            res.json({
                status: 404,
                error: err.message
            })
        })

    },

    postCanciones: function(req, res) {

    }

}

module.exports = controller;