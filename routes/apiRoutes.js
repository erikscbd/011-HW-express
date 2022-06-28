const router = require('express').Router()
const path = require('path');
const fs = require('fs');
let apiNotes = require('../db/db.json');


router.get('/api/notes', (req, res) => {
    apiNotes = JSON.parse(fs.readFileSync('db/db.json'))
    res.json(apiNotes)
  
})

router.post('/api/notes', (req, res) => {
    const savedNote = { id: Math.floor(Math.random() * 999),
        title: req.body.title,
        text: req.body.text}
        apiNotes.push(savedNote);
        fs.writeFileSync('db/db.json',JSON.stringify(apiNotes),    (err, data) => {
            if(err) {
                throw err
            }
            
            })
            res.json(apiNotes)
  
})

router.delete('/api/notes/:id', (req, res) => {
    const savedNote = []
    for (let i=0; i < apiNotes.length; i++ ){
        if (apiNotes[i].id != req.params.id) {
            savedNote.push(apiNotes[i]);
        }
    }
        apiNotes = savedNote
        fs.writeFileSync('db/db.json',JSON.stringify(apiNotes),    (err, data) => {
            if(err) {
                throw err
            }
            
            })
            res.json(apiNotes)
  
})

module.exports = router 