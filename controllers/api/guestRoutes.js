const router = require('express').Router();
const { Guest, User } = require('../../models');
const express = require('express');


router.post('/', async (req, res) => {
  try {
    const guestData = await Guest.create(req.body);

    req.session.save(() => {
      req.session.guest_id = guestData.id;
      req.session.logged_in = true;

      res.status(200).json(guestData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


router.post('/party/:id', async (req, res) => {
  const { name, food, drink } = req.body;
console.log (req.session)
  Guest.upsert(
    {
      guestFood: food,
      guestDrink: drink,
      guestName: name, 
      event_id: req.params.id,
    },
    {
      where: {
        id: req.session.guest_id,
        event_id: req.params.id,
      },
    }
  )
    .then((updatedGuest) => {
      res.status(200).json(updatedGuest);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to update guest.' });
    });
});



router.post('/login', async (req, res) => {
  try {
    const guestData = await User.findOne({ where: { email: req.body.email } });

    if (!guestData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await guestData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.guest_id = guestData.id;
      req.session.logged_in = true;
      
      res.json({ guest: guestData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
