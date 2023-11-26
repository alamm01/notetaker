const express = require('express')
const routes = require("./routes")

const path = require("path")


// initialize the application
const app = express()

const PORT = 3001 || process.env.PORT




app.use(express.static("public"));

app.use(express.json())

app.use(express.urlencoded({extended: true}))


app.use('/api', routes)


// use GET route for the first page

app.get("/routes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
