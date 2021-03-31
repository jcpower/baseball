const { Sequelize, DataTypes, Model } = require('sequelize')  //if rerunning sequelize.define example change back to justDataTypes
const sequelize = new Sequelize('postgres://manager:RoseHOF14@localhost:5432/baseball')


try {
    sequelize.authenticate().then(() => console.log("Connection has been established successfully."));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

    
  class User extends Model {}
  
  // User.init({
  //   // Model attributes are defined here
  //   firstName: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   lastName: {
  //     type: DataTypes.STRING
  //     // allowNull defaults to true
  //   }
  // }, {
  //   // Other model options go here
  //   sequelize, // We need to pass the connection instance
  //   modelName: 'User' // We need to choose the model name
  // });
  
  // // the defined model is the class itself
  // console.log(User === sequelize.models.User); // true

  async function testFunction() {
    User.init({
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'User' // We need to choose the model name
    })
    let command = await User.sync({ force: true })
  console.log(command)
}
  
  testFunction()




  //Practice model -sequelize.define example

  // const User = sequelize.define('User', {
    //   // Model attributes are defined here
    //   firstName: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   lastName: {
    //     type: DataTypes.STRING
    //     // allowNull defaults to true
    //   }
    // }, {
    //   // Other model options go here
    // });
    
    // // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true





  
//   const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true