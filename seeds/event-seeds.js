const { Event } = require('../models');

const eventData = [
    {
        host_id: 1,
        event_name: "Whiskey",
        event_date: Date.now(),
        description: "party"
    },

    
]
const seedEvent = async () => Event.bulkCreate(eventData)

module.exports = seedEvent;