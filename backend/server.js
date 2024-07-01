const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./routes/planRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

console.log('MONGODB_URL', process.env.MONGODB_URL )
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`connected To MongoDB...`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))