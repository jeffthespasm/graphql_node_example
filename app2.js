var express = require('express')

var app = express()

app.get('/bar', (req, res) => {
  console.log('/bar requested')
  res.send('Bar')
})

app.listen(4002)
console.log('listening on 4002')
