var Sequelize = require('sequelize');
var config = require('../config').config();

module.exports = function(){
  var sequelize = new Sequelize('flowershop', config.database.user, config.database.password, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

  });

  sequelize
    .authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
}


