const { Sequelize, DataTypes, Model } = require('sequelize')  //if rerunning sequelize.define example change back to justDataTypes
const sequelize = new Sequelize('postgres://manager:RoseHOF14@localhost:5432/baseball')


try {
    sequelize.authenticate().then(() => console.log("Connection has been established successfully."));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  class Game extends Model {}

  async function testFunction() {
    Game.init({
      // Model attributes are defined here
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      hometeam: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      hometeamscore: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      visitorteam: {
          type: DataTypes.STRING,
          allowNull: false
      },
      visitorteamscore: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'User' // We need to choose the model name
    })
   console.log(command)
}
  
  testFunction()
