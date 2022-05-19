const router = require('express').Router()
const path = require('path');
const fs = require('fs');


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
    if(err) {
        throw err
    }
    res.send(data)

    })
})
module.exports = router 