const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model { }

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // food_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "user",
        //         key: "id",
        //     }
        // },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //     model: "event",
            //     key: "id",
            // }
        },
        
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'food',
    }
)
module.exports = Food;