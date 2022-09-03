module.exports = (sequelize, dataTypes) => {

    const alias = "Canciones"
    const cols = {
        id:{
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        titulo: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },

        duracion: {
            type: dataTypes.INTEGER
        },

        genero_id: {
            type: dataTypes.INTEGER
        },

        album_id: {
            type: dataTypes.INTEGER
        },
        
        artista_id: {
            type: dataTypes.INTEGER
        },
    }

    const config = {      
            tableName: "canciones",
            timestamps: false      
        }
    
    const Canciones = sequelize.define(alias, cols, config);

    Canciones.associate = function (models) {
        Canciones.belongsTo(models.Albumes, {
            as: "album",
            foreignKey: "album_id",
            });
        
        Canciones.belongsTo(models.Generos, {
            as: "genero",
            foreignKey: "genero_id"
        }) 
        
        Canciones.belongsTo(models.Artistas, {
            as: "artista",
            foreignKey: "artista_id"
        }) 
    }

    return Canciones;
}