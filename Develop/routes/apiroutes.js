const route = require('express').Router();
const store = require('../db/store.js');
route.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
});
route.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note) )
    .catch((err) => res.status(500).json(err));
});
router.delete('/notes/:id', (req, res) => {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true}))
    .catch((err) => res.status(500).json(err));
});
module.exports = route;