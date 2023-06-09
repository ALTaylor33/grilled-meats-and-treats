const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model { }

Guest.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        guestName: {
            type: DataTypes.STRING,
        }, 
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "event",
                key: "id",
            }
        },
        guestDrink: {
            type: DataTypes.STRING,
        },
        guestFood: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'guest',
    }
)
module.exports = Guest;