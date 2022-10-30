const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    //this section here compares the hashed pw stored in the database with the original pw created by the user
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}
//init() is passing all of the data to the columns, in this case the user ID, username and PW 
User.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },   
    },
    },
    {
    hooks: {
        //hashing the user pw before inserting it into the database
        beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    }
);  

module.exports = User; 