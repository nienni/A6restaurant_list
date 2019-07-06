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

//引用express-handlebars
const exphbs = require('express-handlebars')

//view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//route
//首頁index
app.get('/', (req, res) => {
  res.render('index')
})

//瀏覽全部餐廳頁面
app.get('/restaurants', (req, res) => {
  res.send('瀏覽全部餐廳頁面')
})

//新增一個餐廳頁面（create）
app.get('/', (req, res) => {
  res.send('新增餐廳頁面')
})

//新增餐廳的功能
app.post('/', (req, res) => {
  res.send('新增餐廳功能鍵')
})

//瀏覽一個餐廳頁面（detail）
app.get('/', (req, res) => {
  res.send('餐廳詳細資訊')
})

//編輯餐廳頁面（edit）
app.get('/', (req, res) => {
  res.send('編輯頁面')
})

//編輯餐廳的功能
app.post('/', (req, res) => {
  res.send('編輯餐廳功能鍵')
})

//刪除餐廳
app.post('/', (req, res) => {
  res.send('刪除按鈕')
})

//listen on 
app.listen(3000, () => {
  console.log('wed app is running')
})
