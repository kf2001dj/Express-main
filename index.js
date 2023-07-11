const express = require('express')
const app = express()
const port = 3000

app.get('/hapo', (req, res) => {
  res.send('Hello World! ahihi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})