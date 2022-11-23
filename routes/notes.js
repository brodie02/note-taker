const notes = require('express').Router()
const { v4: uuidv4 } = require('uuid');
const notesDb = require('../db/db.json')
const { createNewNote, findById, editNote, removeNote } = require('../public/assets/js/notes');

notes.get('/', (req, res) =>
    res.json(notesDb)
)

notes.post('/', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notesDb);
    } else {
        editNote(req.body, notesDb);
    }

    res.json(req.body);
})

module.exports = notes