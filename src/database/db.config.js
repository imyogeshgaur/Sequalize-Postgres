const Sequelize  = require('sequelize');
require('pg');

const sequelize = new Sequelize('testing', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging:false
});

module.exports = connect = async()=>{
  try {
    await sequelize.authenticate();
    console.log("Connected SucessFully !!!");
  } catch (error) {
    console.log(error);
  }
  
}