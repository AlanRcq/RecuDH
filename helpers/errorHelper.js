sendConnectionError = function(res, err){
    console.log(err);
    res.status(407).json({
         status: 407,
         mensaje: "Error al conectar a la base de datos"
    }) 
}

module.exports = { sendConnectionError }