const User = require('./User');
const Drink = require('./drink');
const Event = require('./event');
const Food = require('./food');
const Guest = require('./guest');



Guest.belongsTo(Event, {
  foreignKey: "event_id"
})

Food.belongsTo(Guest, {
  foreignKey: "guest_id"
})

Drink.belongsTo(Guest, {
  foreignKey: "guest_id"
})

Event.hasMany(Guest, {
  foreignKey: "event_id"
})

module.exports = { User, Event, Guest, Food, Drink };
