'user strict'

module.exports = (sequelize, DataTypes) => {
    let Estudio = sequelize.define('estudio', {
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true, 
            primaryKey: true,  
            allowNull: false 
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        archivo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        archivo_nombre: {  
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: { 
            type: DataTypes.DATE, 
            field: 'created_at', 
            defaultValue: DataTypes.NOW, 
            allowNull: false 
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: { 
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    }, {
        paranoid: true, 
        freezeTableName: true, 
    })

    Estudio.associate = models => {
        Estudio.belongsTo(models.turno)
    }
      
    return Estudio
}