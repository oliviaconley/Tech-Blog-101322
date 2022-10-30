const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {  
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
              },
        }
    },
    {
        sequelize,
        timestamps: true, //ok figure this out Olivia 
        updatedAt: false,
        createdAt: 'date_created',
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
      }
);

module.exports = Blog; 