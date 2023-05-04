const { Drink } = require('../models');

const drinkData = [
    {
        drink_id: 3,
        drink_name: "Whiskey",
        event_id: 1,
    },
    
]
const seedDrinks = async () => Drink.bulkCreate(drinkData)

module.exports = seedDrinks;