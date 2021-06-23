const route = require('express').Router();
const store = require('../db/store.js');
route.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
});