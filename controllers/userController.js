const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    User.findAll()
        .then(users => {
        res.json(users)
    }) .catch (err => {
        console.log(err);
        res.status(500).json({
            msg: "mission failed, we'll get em next time",
            err,
        });
    });
});

module.exports = router;