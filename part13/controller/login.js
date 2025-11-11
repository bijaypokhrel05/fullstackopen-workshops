const router = require('express').Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/config');

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({
            where: {
                username: username
            }
        });
        const passwordIsCorrect = password === 'secretWord';
        if (!(existingUser && passwordIsCorrect)) {
            return res.status(401).json({ error: 'Invalid username or password!' });
        }

        if (existingUser.disabled) {
            return res.status(401).json({
                error: 'account disabled, please contact admin'
            })
        }

        const userForToken = {
            id: existingUser.id,
            username: existingUser.username
        }

        const token = jwt.sign(userForToken, SECRET);
        res.status(201).json({ token, username: username, name: existingUser.name });
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
});

module.exports = router;