//includes
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

//create app
const app = express()


//connect to the DATABASE
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

//checking connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Middleware to json file
app.use(express.json()) 



//listen to the server
app.listen(3000, () => console.log('Server Started'))   