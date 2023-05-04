const router = require('express').Router();
const { Food } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFood = await Food.create({
      ...req.body,
      food_id: req.session.guest_id,
    });

    res.status(200).json(newFood);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const foodData = await Food.destroy({
      where: {
        id: req.params.id,
        food_id: req.session.guest_id,
      },
    });

    if (!foodData) {
      res.status(404).json({ message: 'No food found with this id!' });
      return;
    }

    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;