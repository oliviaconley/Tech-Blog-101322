const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
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
        },
        post_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'blog',
                key: 'id',
              },
        },
    },
    {
        sequelize,
        timestamps: true,
        updatedAt: false,
        createdAt: 'date_created',
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
)

module.exports = Comment; 