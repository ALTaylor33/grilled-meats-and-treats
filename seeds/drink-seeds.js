const { Drink } = require('../models');

const Drink = require("../models/drink")

const drinkData = [
    {
        drink_id: 1,
        drink_name: "Whiskey"
    }
]
const seedDrinks = () => Drink.bulkCreate(drinkData)

module.exports = seedDrinks;