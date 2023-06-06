const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Room extends Model {}

Room.init(
    {
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        room_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        room_desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'item_id',
            },
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'event_id',
            },
        },
        ending_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ending',
                key: 'ending_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'room',
    }
);

module.exports = Room;