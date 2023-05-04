const { Food } = require('../models');


const foodData = [
    {
        food_id: 1,
        food_name: "Burgers",
        event_id: 1
    },
    {
        food_id: 2,
        food_name: "Hot Dogs",
        event_id: 1
    },
]
const seedFood = async () => Food.bulkCreate(foodData)

module.exports = seedFood;