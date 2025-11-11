const router = require('express').Router();
const { Note, User } = require('../models');
const tokenExtractor = require('../utils/middleware');

router.get('/', async (req, res) => {
    try {
        const notes = await Note.findAll({
            attributes: { exclude: ['userId']},
            include: {
                model: User,
                attributes: ['name', 'username']
            }
        });
        res.json(notes);
    } catch(err) {
        return res.status(500).json({error : err.message});
    }
});

router.post('/', tokenExtractor, async (req, res) => {
    try {
        const user = await User.findByPk(req.decodedToken.id);
        const note = await Note.create({
            ...req.body,
            userId: user.id,
            date: new Date()
        });

        res.status(201).json(note);
    } catch(err) {
        return res.status(400).json({error : err.message});
    }
})

module.exports = router;