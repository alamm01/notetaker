
const router = require('express').Router()

const { v4: uuidv4} = require('uuid');

const {readAndAppend, readFromFile, deleteNote} = require('../helpers/fsUtils')


const fs = require('fs')


// GET Route for getting the text

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data))
    })
})


// POST Route for error logging
router.post('/notes', (req, res) => {
    // const userdata = {};
    // readAndAppend('./db/db.json').then((data) => {
    //     userdata = res.json(JSON.parse(data))
    //     res.append(userdata)
    // })

    ///////

    // console.log(req);

    console.log(req.body);


    const {title, text} = req.body

    const payload = {
        title, 
        id: 
    }
})

// {
//     "title":"Test Title",
//     "text":"Test text"
// }




module.exports = router;