const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

// GET all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// CREATE new user
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET one user
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.user_id);
        if (!userData) {
            res.status(404).json({ message: 'No user with this ID :('});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// UPDATE a user
router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                user_id: req.params.user_id,
            },
        });
        if (!userData[0]) {
            res.status(404).json({ message: 'No user with this ID :('});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                user_id: req.params.user_id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: 'No user with this ID :('});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;