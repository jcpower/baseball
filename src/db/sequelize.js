const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('postgres://user:manager:5432/baseball')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }