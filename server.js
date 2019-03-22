const config = require('./config')
const express = require('express')
const app = express()

app.all('/', (req, res) => {
  res.json({
    api: 'Centraal Academy',
    version: '0.0.1'
  })
})

app.listen(config.port, () => {
  console.log('API Ready')
})
