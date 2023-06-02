const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Heart is beating!')
})

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})