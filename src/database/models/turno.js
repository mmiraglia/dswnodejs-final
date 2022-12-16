'user strict'

module.exports = (sequelize, DataTypes) => {
    let Turno = sequelize.define('turno', {
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true, 
            primaryKey: true,  
            allowNull: false 
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        observaciones: {
            type: DataTypes.TEXT,
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

    Turno.associate = models => {
        Turno.belongsTo(models.tratamiento)
        Turno.belongsTo(models.medico)
        Turno.belongsTo(models.paciente)
        Turno.hasMany(models.estudio)
    }
      
    return Turno
}