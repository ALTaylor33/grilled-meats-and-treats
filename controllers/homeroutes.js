const router = require('express').Router();
const { Event, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/home', async (req, res) => {
  console.log('inside homeroutes')
  try {

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

     // Pass serialized data and session flag into template
     res.render('home', { 
  //     events, 
       logged_in: req.session.logged_in 
    });
   } catch (err) {
     res.status(500).json(err);
   }
});

router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: Guest,
          attributes: ['name'],
        },
      ],
    });

    const event = eventData.get({ plain: true });

    res.render('event', {
      ...event,
      logged_in: req.session.logged_in
    });
  } catch (err) {
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

    res.render('profile', {
      ...events,
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
    res.redirect('/home');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }

  res.render('signup');
});

module.exports = router;
