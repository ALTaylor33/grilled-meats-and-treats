const { Drink } = require('../models');

const Food = require("../models/food")

const foodData = [
    {
        food_id: 1,
        food_name: "Burgers"
    }
]
const seedFood = () => Food.bulkCreate(foodData)

module.exports = seedFood;