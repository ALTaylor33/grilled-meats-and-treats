const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model { }

Drink.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // drink_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "user",
        //         key: "id",
        //     }
        // },
       event_id:
        {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //     model: "event",
            //     key: "id",
            // }
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'drink',
    }
)
module.exports = Drink;