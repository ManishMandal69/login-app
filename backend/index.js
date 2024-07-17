const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/route')
const { connectDB } = require('./db')

const app = express()


// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))
app.disable('x-powered-by'); //less hackers know about our stack

const PORT = 5000;

//HTTP GET REQUEST
app.get('/', (req, res)=>{
    res.status(201).json('Home GET REQUEST')
})

// API Routes
app.use('/api', router)

// Connection to the database
connectDB()

//Start the Server
app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT ${PORT}`)
}) 