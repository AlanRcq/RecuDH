module.exports = (sequelize, dataTypes) => {

    const alias = "Generos"
    const cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        nombre: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
    }

    const config = {      
            tableName: "generos",
            timestamps: false      
        }
    
    const Generos = sequelize.define(alias, cols, config);

    Generos.asociate = function (models) {
        Generos.hasMany(models.Canciones, {
            as: "generos",
            foreignKey: "album_id",
            });
    }

    return Generos;
}