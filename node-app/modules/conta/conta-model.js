'use strict';

module.exports = (sequelize, Sequelize) => {
    const Conta = sequelize.define('Conta', {
        oid: {
            allowNull: false,
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        oidUsuario: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        oidCategoria: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        descricao:{
            allowNull: false,
            type: Sequelize.STRING
        },
        valor:{
            allowNull: false,
            type: Sequelize.DECIMAL(10,2)
        }
    },{
        tableName: "Contas"
    });

    Conta.associate = function(models) {
        Conta.belongsTo(models.Usuario, {foreignKey: 'oidUsuario', as: 'usuario'})
        Conta.belongsTo(models.Categoria, {foreignKey: 'oidCategoria', as: 'categoria'})
    };
    return Conta;
};
