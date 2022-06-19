const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('doneaction', 'root', '88**ECFmi', {
    host: 'localhost',
    dialect:  'mysql'
  });
module.exports = sequelize;