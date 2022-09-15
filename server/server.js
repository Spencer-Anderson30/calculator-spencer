const express = require('express')
const cors = require('cors')
const axios = require('axios')
// const Sequelize = require('sequelize')
// const sequelize = require('sequelize')
// require('dotenv').consig()

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false,
//         }
//     }
// })

const app = express()
app.use(cors())
app.use(express.json())

//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/styles.css"))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.js"))
})

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, "./server/server.js"))
// })

const { getQuote, createNewBudget } = require('./controller')


app.get("/api/quote/", getQuote);
app.post("/api/budget", createNewBudget);

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})