const db = require("../database/models");
const { validationResult } = require("express-validator");
const { sendConnectionError } = require('../helpers/errorHelper')

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
                    artista: cancion.artista.nombre + (cancion.artista.apellido? " " + cancion.artista.apellido : ""),
                    genero: cancion.genero.name
                });
            })

            let returnObject = {
                status: 200,
                canciones: newCanciones
            }

            res.status(200).json(returnObject);
        }).catch((err) => 
        {
            sendConnectionError(res, err)
        })

    },

    getCancion: function(req, res) {

        let cancionPk = req.params.id;
        db.Canciones.findByPk(
            cancionPk, 
            {
            include: [{ association: "album" }, {association: "artista"}, {association: "genero"}]
            } ).then((cancion) => {
            
            if (!cancion) {
                res.status(404).json({
                    status: 404,
                    mensaje: "No existe una canción con el id " + cancionPk
                })
                return;
            }

            let returnObject = {
                status: 200,
                cancion: {
                    id: cancion.id,
                    titulo: cancion.titulo,
                    duracion: cancion.duracion,
                    album: cancion.album.nombre,
                    artista: cancion.artista.nombre  + (cancion.artista.apellido? " " + cancion.artista.apellido : ""),
                    genero: cancion.genero.name
                }
            }
            
            res.status(200).json(returnObject);
        }).catch((err) => {
            sendConnectionError(res, err)
        })

    },

    postCanciones: function(req, res) {

        let error = validationResult(req);

        if (!error.isEmpty()) {
            res.status(400).json({
                status: 400,
                error: error.mapped(),
            })
            return;
        }

        let {titulo, duracion, genero_id, album_id, artista_id} = req.body;
        console.log(req.body)

        db.Canciones.create({
            titulo: titulo,
            duracion: duracion,
            genero_id: genero_id,
            album_id: (album_id? album_id : null),
            artista_id: artista_id
        }).then(() => {
            res.status(201).json({
                status: 201,
                mensaje: "Canción creada correctamente"
            })
        }).catch((err) => {
            sendConnectionError(res, err);
        })

    },

    putCanciones: function(req, res) {
        let error = validationResult(req);

        if (!error.isEmpty()){
            res.status(400).json({
                status: 400,
                error: error.mapped(),
            })
            return;
        }

        let cancionPk = req.params.id;
        let {titulo, duracion, genero_id, album_id, artista_id} = req.body;

        db.Canciones.findByPk(cancionPk).then((cancion) => {

            if (!cancion) {
                res.status(404).json({
                    status: 404,
                    mensaje: "Canción inexistente"
                })
            }

            cancion.update({
                titulo: (titulo? titulo : cancion.titulo),
                duracion: (duracion? duracion : cancion.duracion),
                album_id: (album_id? album_id : cancion.album_id),
                artista_id: (artista_id? artista_id : cancion.artista_id),
                genero_id: (genero_id? genero_id : cancion.genero_id)
            }).then(
                res.status(201).json({
                    status: 201
                })
            )

        }).catch((err) => {
            sendConnectionError(res, err)
        })

    },

    deleteCanciones: function(req, res) {

        let cancionPk = req.params.id;
        db.Canciones.destroy({
            where: {id: cancionPk}
        }).then((cancion) => {

            if (!cancion) { 
                res.status(400).json({
                    status: 400,
                    mensaje: "No existe una cancion con el id " + cancionPk
                })
                return;
            }

            res.status(201).json({
                status: 201,
                mensaje: "Canción eliminada correctamente"
            })
        }).catch((err) => {
            sendConnectionError(res, err)
        });

    }

}

module.exports = controller;