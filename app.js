//var
const express = require('express')
const app = express()

//載入mongoose
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true })

const db = mongoose.connection

//載入model
const Restaurant = require('./models/restaurant.js')
//on once 測試
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

//route
app.get('/', (req, res) => {
  res.send('this is index of restaurant list')
})

//listen on 
app.listen(3000, () => {
  console.log('wed app is running')
})
