const router = require('express').Router();
const guestRoutes = require('./guestRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/guest', guestRoutes);
router.use('/event', eventRoutes);

module.exports = router;
