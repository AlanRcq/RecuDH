module.exports = (sequelize, dataTypes) => {

    const alias = "Canciones"
    const cols = {
        id:{
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        categoria:{
            allowNull: false,
            type: dataTypes.STRING(45)
        },

        duracion: {
            type: dataTypes.INTEGER
        },
    }

    const config = {      
            tableName: "canciones",
            timestamps: false      
        }
    
    const Canciones = sequelize.define(alias, cols, config);

    Canciones.asociate = function (models) {
        Canciones.belongsTo(models.Albumes, {
            as: "albumes",
            foreignKey: "album_id",
            });
        
        Canciones.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genero_id"
        }) 
        
        Canciones.belongsTo(models.Artistas, {
            as: "artistas",
            foreignKey: "artista_id"
        }) 
    }

    return Canciones;
}