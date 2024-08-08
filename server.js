const express = require('express')
const app = express()
const PORT = 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const colors = require('colors')
const connectDb = require('./config/db')

// const userRoutes = require('./routes/userRoutes')

connectDb()
// view Engine
app.set('view engine', 'pug')
app.set('views', './views')

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

// routes/rest/endpoints
app.use('/api/v1/user', require('./routes/userRoutes'));

// viewROUTES
app.get("/", (req,res) => {
    res.render('Firstfile')
})

// listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.blue);
});