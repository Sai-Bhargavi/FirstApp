const  Sequelize  = require('sequelize');
const sequelize = new Sequelize('db1', 'root', 'admin', {
    host: 'localhost',
    dialect:  'mysql'
  });
const testConnection = async function (){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {sequelize, testConnection}
