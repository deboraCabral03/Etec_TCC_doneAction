'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doacao.belongsTo(models.User);
    }
  }
  Doacao.init({
    userId: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    dataPost: DataTypes.DATE,
    descricao: DataTypes.STRING,
    tamanho: DataTypes.STRING,
    cor: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doacao',
  });
  return Doacao;
};