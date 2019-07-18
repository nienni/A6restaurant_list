const mongoose = require('mongoose')
const Restaurant = require('../restaurant.js')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true })

const db = mongoose.connection
const { results: results } = require('../../restaurant.json')

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')

  results.forEach(restaurant => {
    Restaurant.create({
      name: restaurant.name,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      rating: restaurant.rating,
      description: restaurant.description
    })
  })

  console.log('done!')

})
