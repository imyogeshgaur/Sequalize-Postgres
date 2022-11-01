const Sequelize  = require('sequelize');
require('pg');
require("dotenv").config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
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