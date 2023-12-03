
const router = require('express').Router()

const { v4: uuidv4 } = require('uuid');

const { readAndAppend, readFromFile, deleteNote } = require('../helpers/fsUtils')

const fs = require('fs')

// GET Route for getting the text
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data))
    })
})


// POST Route for error logging
router.post('/notes', (req, res) => {

    console.log(req.body);


    const { title, text } = req.body

    const payload = {
        title,
        id: uuidv4(),
        text,
    }
    // Boolean(req.body ) === true
    if (req.body) {
        readAndAppend(payload, './db/db.json')
        console.log(payload);

        res.json("Message added....")
    } else {
        res.json({
            message: "Objhect is valid, not logging, checking the code"
        })
    }
})

//DELETE route
router.delete("/notes/:id", (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
        if (err) throw err;
        
        let json = JSON.parse(data)
        let notes = json.filter((note) => note.id !== req.params.id);

        console.log(notes);

        fs.writeFile("db/db.json", JSON.stringify(notes), function(err){
            if(err) throw err;
            res.redirect("/notes.html")
        })

    })
})


module.exports = router;