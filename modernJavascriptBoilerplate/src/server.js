const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log('here')
})

app.listen(port, () => {
  console.log(`server is listening on port number ${port}`)
})
