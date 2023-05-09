const router = require('express').Router();
const { Event, Guest } = require('../models');
const withAuth = require('../utils/auth');
const randomFood = require('../utils/gpt')

router.get('/', async (req, res) => {
  console.log('inside homeroutes')
  // try {

  //   // // Get all projects and JOIN with user data
  //   // const eventData = await Event.findAll({
  //   //   include: [
  //   //     {
  //   //       model: Guest,
  //   //       attributes: ['name'],
  //   //     },
  //   //   ],
  //   // });
   
res.redirect('login')
  //   // Serialize data so the template can read it
  //   const events = eventData.map((event) => event.get({ plain: true }));

  //   // Pass serialized data and session flag into template
  //   res.render('homepage', { 
  //     events, 
  //     logged_in: req.session.logged_in 
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/party/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: Guest,
          attributes:["guestName", "guestDrink", "guestFood"]
        },
      ],
    });

    const party = eventData.get({ plain: true });
    console.log(party)

    res.render('single-party', {
      party,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});
router.get('/party', async (req, res) => {
  try {
    const eventData = await Event.findAll( {
      include: [
        {
          model: Guest,
        },
      ],
    });

    const parties = eventData.map((event) => event.get({ plain: true }));
    console.log(parties)

    res.render('party', {
      parties,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const eventData = await Event.findAll( {
  
    });

    const events = eventData.map((event) => event.get({ plain: true }));
    console.log(events)
    res.render('profile', {
      events,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
 const gptText = randomFood()
  res.render('login',{randomFood:gptText});
});

module.exports = router;
