const router = require('express').Router();
const { Note, User, Team } = require('../models');
const tokenExtractor = require('../utils/middleware');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Note
            },
            {
                model: Team,
                attributes: ['name', 'id']
            }
        ]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, username } = req.body;
        const existingUser = await User.findOne({
            where: {
                username: username
            }
        });
        if (existingUser) {
            return res.status(409).json({ error: 'Username already taken!' });
        }
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

const isAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.decodedToken.id);
    if (!user.admin) {
        return res.status(401).json({ error: 'operation not allowed' });
    }
    next();
}

router.put('/:username', tokenExtractor, isAdmin, async (req, res) => {
    const user = await User.findOne({
        where: {
            username: req.params.username
        }
    });

    if (user) {
        user.disabled = req.body.disabled
        await user.save();
        res.json(user);
    } else {
        res.status(404).end();
    }
});

module.exports = router;