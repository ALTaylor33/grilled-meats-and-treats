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












// User.belongsTo(Event, {
//   foreignKey: 'host_id',
//   onDelete: 'CASCADE'
// });

// Event.belongsTo(User, {
//   foreignKey: 'host_id'
// });

// User.belongsToMany(Event, {
//   foreignKey: 'guest_id',
//   through:Guest
// });

// Event.belongsToMany(User, {
//   foreignKey: 'event_id',
//   through:Guest
// })
// Food.belongsTo(User, {
//   foreignKey: 'food_id',
  
// })
// Food.belongsTo(Event, {
//   foreignKey: 'event_id',
  
// })
// Drink.belongsTo(User, {
//   foreignKey: 'drink_id',
  
// })
// Drink.belongsTo(Event, {
//   foreignKey: 'event_id',
  
// })
// User.hasMany(Drink, {
//   foreignKey: 'drink_id'
// })
// User.hasMany(Food, {
//   foreignKey: 'food_id'
// })
// Event.hasMany(Drink, {
//   foreignKey: 'event_id'
// })
// Event.hasMany(Food, {
//   foreignKey: 'event_id'
// })

module.exports = { User, Event, Guest, Food, Drink };
