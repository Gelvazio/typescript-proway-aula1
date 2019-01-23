'use strict';

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        oid: {
            allowNull: false,
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            email:{
            allowNull: false,
            unique: true,
            type: Sequelize.STRING
        },
            nome:{
            allowNull: false,
            type: Sequelize.STRING
        },
            senha:{
            allowNull: false,
            type: Sequelize.STRING
        },
            status: {
            allowNull: false,
            type: Sequelize.ENUM,
            values: ['ativo', 'inativo'],
            defaultValue: 'ativo'
        }
    },
    {
        tableName: "Usuarios"
    });

    Usuario.associate = function(models) {
        //
    };
    return Usuario;
};
