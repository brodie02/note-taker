const notes = require('express').Router()
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
)

notes.post('/', (req, res) => {
    res.json('post')
})

module.exports = notes