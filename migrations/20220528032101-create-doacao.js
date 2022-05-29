'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      generoId: {
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING
      },
      dataPost: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
      },
      tamanho: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doacaos');
  }
};