const express = require('express');
const router = express.Router();
const Ending = require('../models/Ending');

router.get('/', async (req, res) => {
    try {
        const endingData = await Ending.findAll();
        res.status(200).json(endingData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;