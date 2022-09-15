const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const path= require('path')

const app = express()
app.use(cors())
app.use(express.json())

//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/styles.css"))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.js"))
})

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, "./server/server.js"))
// })

const { getQuote, createNewBudget } = require('./controller')


app.get("/api/quote/", getQuote);
app.post("/api/budget", createNewBudget);

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})