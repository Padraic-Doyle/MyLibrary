//if (process.env.NODE_ENV !== 'production') {
// require('dotenv').parse()
//}


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/author');

//set view engine
app.set('view engine', 'ejs')

//set where views come from 
app.set('views', __dirname + '/views')

//express layouts
app.set('layout', 'layouts/layout')

//tell express app to use express layouts
app.use(expressLayouts)

//tell express where public files are
app.use(express.static('public'))

//views folder holds server renderd views, public folder holds 

//set up database
const mongoose = require('mongoose')

//set connection variable
mongoose.connect('mongodb://padraic:podge101@ds261116.mlab.com:61116/mylibrary', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('connected baby'))



//set port
app.listen(process.env.PORT || 3000)

app.use('/', indexRouter)
app.use('/authors', authorRouter)