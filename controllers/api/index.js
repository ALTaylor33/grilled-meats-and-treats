const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('..homeroutes/homeRoutes');

router.use('/users', userRoutes);
router.use('/projects', homeRoutes);

module.exports = router;
