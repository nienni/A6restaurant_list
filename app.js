//var
const express = require('express')
const app = express()

//route
app.get('/', (req, res) => {
  res.send('this is index of restaurant list')
})

//listen on 
app.listen(3000, () => {
  console.log('wed app is running')
})
