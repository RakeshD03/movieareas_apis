const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({msg: 'Hello World!'})
})


//CRUD functions for movies 

// for Reading the movies 
app.get('/movies', (req, res) => {
  })

// for Creating movies
app.post('/movies',(req,res)=>{

})

// for updating movies 
app.put('/movies/:id',(req,res)=>{

})

// for deleting movies 
app.delete('/movies/:id',(req,res)=>{

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

