const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('doneaction', 'root', 'debora759', {
    host: 'localhost',
    dialect:  'mysql'
  });
module.exports = sequelize;