const { Sequelize, DataTypes, Model } = require('sequelize')  //if rerunning sequelize.define example change back to justDataTypes
const sequelize = new Sequelize('postgres://manager:RoseHOF14@localhost:5432/baseball',{
    quoteIdentifiers: false  
})

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
        type: DataTypes.STRING,
        allowNull: false 
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
      timestamp: {
          type: DataTypes.TIME  
      }
      }, {
      // Other model options go here
      sequelize: sequelize, // We need to pass the connection instance
      modelName: 'Game' // We need to choose the model name
    })
    const testGame = Game.build({
        date: new Date('2021-04-01'),
        hometeam: "Reds",
        hometeamscore: "11",
        visitorteam: "Cardinals",
        visitorteamscore: "0"
    })
    console.log(testGame instanceof Game)
    console.log(testGame.hometeam) 
    await testGame.save()
    console.log('Test Game was saved to the DB!!!!')
}
  
  testFunction()

  
