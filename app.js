var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var path = require('path')

var app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

var mongoose = require('mongoose')
var dbURI = require('./keys/keys').mongoURI

mongoose
  .connect(dbURI, {useNewUrlParser: true})
  .then(() => console.log("=== Mongo DB connected! ==="))
  .catch(err => console.log(err))

// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

const journalItems = require('./routes/api/journalItems')
app.use('/api/entries', journalItems)

if(process.env.NODE_ENV === "production") {
  app.use(express.static('cient/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.hmtl'))
  })
}

// app.use('/', indexRouter)
// app.use('/api/users', usersRouter)

module.exports = app
