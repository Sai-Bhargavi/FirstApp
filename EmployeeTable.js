const {Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./DbConnection').sequelize
const Employee = sequelize.define('employee',
{
    fullName: {
        type: DataTypes.STRING,
        allowNull : false
    },
    SID: {
      type: DataTypes.INTEGER,
      allowNull : false
        }
}

);
console.log(Employee === sequelize.models.Employee); 

module.exports = Employee