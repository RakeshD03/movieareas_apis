const express = require('express')
const movieRoutes = require('./routes/movies_routes.js');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({msg: 'Hello World!'})
})


app.use('/', movieRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

