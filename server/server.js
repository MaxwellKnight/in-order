//includes
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')

//create app
const app = express()


//connect to the DATABASE
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

//checking connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Allow cors middleware
app.use(cors());

//Middleware to json file
app.use(express.json()) 

//creating users route
const userrouter = require('./routes/users')
app.use('/users',userrouter)

//creating products route
const productrouter = require('./routes/products')
app.use('/products',productrouter)

//creating guest route
const guestrouter = require('./routes/guests')
app.use('/guests',guestrouter)

//creating order route
const orderrouter = require('./routes/orders')
app.use('/orders',orderrouter)




//listen to the server
app.listen(3000, () => console.log('Server Started'))   