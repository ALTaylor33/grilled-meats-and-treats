const User = require('./User');
const Event = require('./event');
const Guest = require('./guest');

User.belongsTo(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'host_id'
});

User.belongsToMany(Event, {
  foreignKey: 'guest_id',
  through:Guest
});

Event.belongsToMany(User, {
  foreignKey: 'event_id',
  through:Guest
})

module.exports = { User, Event };
