module.exports = (sequelize, dataTypes) => {

    const alias = "Artistas"
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

        apellido: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
    }

    const config = {      
            tableName: "artistas",
            timestamps: false      
        }
    
    const Artistas = sequelize.define(alias, cols, config);

    Artistas.associate = function (models) {
        Artistas.hasMany(models.Canciones, {
            as: "artistas",
            foreignKey: "album_id",
            });
    }

    return Artistas;
}