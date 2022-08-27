module.exports = (sequelize, dataTypes) => {

    const alias = "Albumes"
    const cols = {
        id:{
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        nombre:{
            allowNull: false,
            type: dataTypes.STRING(45)
        },

        duracion: {
            type: dataTypes.INTEGER
        },
    }

    const config = {      
            tableName: "albumes",
            timestamps: false      
        }
    
    const Albumes = sequelize.define(alias, cols, config);

    Albumes.asociate = function (models) {
        Albumes.hasMany(models.Canciones, {
            as: "albumes",
            foreignKey: "album_id",
            });
    }

    return Albumes;
}