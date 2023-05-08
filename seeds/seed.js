const sequelize = require('../config/connection');
const { User, Event, Drink, Food, Guest } = require('../models');
const seedGuest = require("./guest-seeds")
const seedFood = require("./food-seeds")
const seedDrinks = require("./drink-seeds")
const seedEvent = require("./event-seeds")


const userData = require('./user-data.json');
// const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const events = await seedEvent()
  const guests = await seedGuest()
  const food= await seedFood()
  const drink = await seedDrinks()

  console.log (events, guests, food, drink)


  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
