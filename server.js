const express = require("express")
const path = require('path')

const app = express()

//middlewares
app.use(express.static('public'))




//main page
app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public/html/ index.html'))
})

//404 handler
app.use((req, res, next) => {
    res.status(404).send("This page doesn't exist")
})

//500 handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//launch the app
app.listen(port = 3000, () => {
    console.log(`url: http://localhost:${port}/`)
})
