const {Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./DbConnection').sequelize
const User = sequelize.define('user',
{
    firstName: {
        type: DataTypes.STRING,
        allowNull : false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull : false
    }
}

);

const chaitObj = User.create({ firstName: "Chaitu", lastName: "Kummaragunta" })
chaitObj.firstName = "Chaitanya"
// chaitObj.save();
console.log(chaitObj)
console.log(chaitObj instanceof User)
console.log(User === sequelize.models.User)


const saiObj = User.create({firstName: "Sai Bhargavi Aireni", lastName : "Aireni"})


module.exports = User