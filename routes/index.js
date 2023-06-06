const router = require('express').Router();
const apiRoutes = require('./api');
const routes = require('../controllers/index');

router.use('/api', apiRoutes);
router.use('/', routes);

module.exports = router;