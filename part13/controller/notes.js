const router = require('express').Router();
const { Note } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch(err) {
        return res.status(500).json({'Error': err.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch(err) {
        return res.status(400).json({'Error': err.message});
    }
})

module.exports = router;