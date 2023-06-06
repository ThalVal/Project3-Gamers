const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Map extends Model {}

Map.init(
    {
        map_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        map_villianlocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        map_userlocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item',
    }
);

module.exports = Map;