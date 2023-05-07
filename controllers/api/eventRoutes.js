const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      // guest_id: req.session.guest_id,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.get('/', (req,res) => {
  Event.findAll()
  .then(data => {
      res.json(data)
  }).catch(err => {
      console.log (err)
      res.status(500).json(err)
  })
});

router.get('/:id', (req,res) => {
  Event.findAll()
  .then(data => {
      res.json(data)
  }).catch(err => {
      console.log (err)
      res.status(500).json(err)
  })
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        guest_id: req.session.guest_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
