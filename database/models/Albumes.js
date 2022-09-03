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

    Albumes.associate = function (models) {
        Albumes.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "album_id",
            });
    }

    return Albumes;
}