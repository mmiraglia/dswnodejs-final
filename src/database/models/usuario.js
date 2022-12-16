'user strict'

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true, 
            primaryKey: true,  
            allowNull: false 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password :{
            type: DataTypes.STRING,
            allowNull: false
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

    Usuario.associate = models => {
        Usuario.hasOne(models.paciente, { foreignKey: 'id', targetKey: 'id'})
        Usuario.hasOne(models.medico, { foreignKey: 'id', targetKey: 'id'})
    }
      
    return Usuario
}