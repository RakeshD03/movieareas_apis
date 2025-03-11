const express = require('express')
const movieRoutes = require('./routes/movies_routes.js');
const connectDB = require('./lib/db.js');

const app = express()
const port = 3000


// Connect DB
connectDB();

// handling routes 
app.use('/', movieRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

