const User = require('./User');
const Event = require('./event');
const Guest = require('./guest');

User.hasMany(Project, {
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

Event.hasMany(User, {
  foreignKey: 'event_id',
  through:Guest
})

module.exports = { User, Event };
