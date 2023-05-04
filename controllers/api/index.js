const router = require('express').Router();
const guestRoutes = require('./guestRoutes');
const eventRoutes = require('./eventRoutes');
const drinkRoutes = require('./drinkRoutes');

router.use('/guest', guestRoutes);
router.use('/event', eventRoutes);
router.use('/drink', drinkRoutes);

module.exports = router;
