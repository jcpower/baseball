const { Sequelize, DataTypes, Model } = require('sequelize')  //if rerunning sequelize.define example change back to justDataTypes
const sequelize = new Sequelize('postgres://manager:RoseHOF14@localhost:5432/baseball')

class User extends Model{}


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
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      age: {
          type: DataTypes.INTEGER
      }
      }, {   
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'User' // We need to choose the model name
});
const testUser = User.build({
    firstName: "Chris",
    lastName: "Power",
    email: "test@test.com",
    age: "22"
    
});
console.log(testUser instanceof User);
console.log(testUser.lastName) ;
await testUser.save();
console.log('Test User was saved to the DB!!!!');
}
  
  testFunction();