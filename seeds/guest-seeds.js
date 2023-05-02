const { Guest } = require('../models');

const Guest = require("../models/guest")

const drinkData = [
    {
        guest_id: 1,
        guest_name: "Whiskey"
    }
]
const seedGuest = () => Guest.bulkCreate(guestData)

module.exports = seedGuest;