'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Doacao);
    }
  }
  User.init({
    id: { primaryKey: true, type: DataTypes.INTEGER },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    user: DataTypes.STRING,
    senha: DataTypes.STRING,
    aniversario: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};