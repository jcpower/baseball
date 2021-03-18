const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('postgres://manager@localhost:5432/baseball')

try {
    sequelize.authenticate().then(() => console.log("Connection has been established successfully.")).catch ((error)=> {
    console.error('Unable to connect to the database:', error)}