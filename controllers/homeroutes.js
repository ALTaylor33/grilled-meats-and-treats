const router = require('express').Router();
const { Event, Guest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const eventData = await Event.findAll({
      include: [
        {
          model: Guest,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      events, 
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
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const guestData = await Guest.findByPk(req.session.guest_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event }],
    });

    const guest = guestData.get({ plain: true });

    res.render('profile', {
      ...guest,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
