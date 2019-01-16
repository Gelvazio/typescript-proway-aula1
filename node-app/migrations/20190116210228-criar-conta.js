'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contas', {
      oid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descricao:{
        allowNull: false,
        type: Sequelize.STRING
      },
      oidUsuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios', //Tabela
          key: 'oid'
        }
      },
      oidCategoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categorias', //Tabela
          key: 'oid'
        }
      },
      valor:{
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contas');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
