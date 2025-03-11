const express = require('express'); 
const { movieIndex,movieCreate,movieUpdate,movieDelete } = require('../controllers/movie_controller');

const router = express.Router()

//CRUD functions for movies 

// for Reading the movies 
router.get('/movies', movieIndex)

// for Creating movies
router.post('/movies',movieCreate)

// for updating movies 
router.put('/movies/:id',movieUpdate)

// for deleting movies 
router.delete('/movies/:id',movieDelete)

module.exports = router;
