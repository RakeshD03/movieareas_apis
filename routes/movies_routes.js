const express = require('express'); 

const router = express.Router()

//CRUD functions for movies 

// for Reading the movies 
router.get('/movies', (req, res) => {
    res.send('hello')
})

// for Creating movies
router.post('/movies',(req,res)=>{
    res.send('hello')
})

// for updating movies 
router.put('/movies/:id',(req,res)=>{
    res.send('hello')
})

// for deleting movies 
router.delete('/movies/:id',(req,res)=>{
    res.send('hello')
})
module.exports = router;
