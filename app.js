//var
const express = require('express')
const app = express()

//引用express-handlebars
const exphbs = require('express-handlebars')

//引用body-parser
const bodyParser = require('body-parser')

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

//view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

//route
//首頁index
app.get('/', (req, res) => {
  Restaurant.find((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', { restaurants: restaurants })
  })
})

//新增一個餐廳頁面（create）
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

//新增餐廳的功能
app.post('/restaurants', (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    description: req.body.description,
  })

  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

//瀏覽一個餐廳頁面（detail）
app.get('/restaurants/:id', (req, res) => {
  res.render('detail')
})

//瀏覽全部餐廳頁面
app.get('/restaurants', (req, res) => {
  res.send('瀏覽全部餐廳頁面')
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
