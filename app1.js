var express = require('express')

var app = express()

app.get('/foo', (req, res) => {
  console.log('/foo requested')
  res.send('Foo')
})

app.listen(4001)
console.log('listening on 4001')
