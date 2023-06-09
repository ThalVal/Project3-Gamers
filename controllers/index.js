const express = require('express');
const router = express.Router();

const endingRoutes = require('./endingController');
const userRoutes = require("./userController");
const tokenRoutes = require('./tokenController');

router.use('/api/endings', endingRoutes);
router.use('/api/users', userRoutes);
router.use('/verifytoken', tokenRoutes);


router.get('/', (req, res) => {
    try {
        res.json('backend test :D')
    } catch (err) {
        res.json(err);
    };
});

module.exports = router;