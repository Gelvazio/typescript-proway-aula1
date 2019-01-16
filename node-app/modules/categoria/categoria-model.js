'use strict';

module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define('Categoria', {
        oid: {
            allowNull: false,
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nome:{
            allowNull: false,
            type: Sequelize.STRING
        }
    },{
        tableName: 'categorias'
    });

    Categoria.associate = function(models) {
        //
    };
    return Categoria;
};
