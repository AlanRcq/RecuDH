module.exports = (sequelize, dataTypes) => {

    const alias = "Generos"
    const cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        name: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
    }

    const config = {      
            tableName: "generos",
            timestamps: false      
        }
    
    const Generos = sequelize.define(alias, cols, config);

    Generos.associate = function (models) {
        Generos.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "genero_id",
            });
    }

    return Generos;
}