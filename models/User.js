const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        ending_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ending',
                id: 'id',
            },
        },
    },
    {
        sequelize,
        hooks: {
            beforeCreate: userObj => {
                userObj.password = bcrypt.hashSync(userObj.password, 5);
                return userObj
            }
        },
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        
    }
);

module.exports = User;