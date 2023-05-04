const { Guest } = require('../models');


const guestData = [
    {
        guest_id: 2,
        event_id: 1
    },
    {
        guest_id: 3,
        event_id: 1
    },

]
const seedGuest = async () => Guest.bulkCreate(guestData)

module.exports = seedGuest;