const express = require('express');
const router = express.Router();

const endingRoutes = require('./endingController');
const userRoutes = require("./userController");

router.use('/api/endings', endingRoutes);
router.use('/api/users', userRoutes);


router.get('/', (req, res) => {
    try {
        res.json('backend test :D')
    } catch (err) {
        res.json(err);
    };
});

module.exports = router;