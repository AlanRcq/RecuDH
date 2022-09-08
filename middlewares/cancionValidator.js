const { body } = require('express-validator');

const validacionPost = [
    body("titulo").notEmpty().withMessage("Debes agregar un título"),
    body("artista_id").notEmpty().withMessage("La canción debe tener un artista"),
    body("genero_id").notEmpty().withMessage("La canción debe tener un género"),
    body("album_id").notEmpty().withMessage("La canción debe tener un álbum")
];


const validacionPut = [
    body("titulo").optional().isLength({min: 1}).withMessage("La canción debe tener un título"),
    body("artista_id").optional().isLength({min: 1}).withMessage("La canción debe tener un artista"),
    body("genero_id").optional().isLength({min: 1}).withMessage("La canción debe tener un género"),
    body("album_id").optional().isLength({min: 1}).withMessage("La canción debe tener un álbum")
]
module.exports = { validacionPost, validacionPut };