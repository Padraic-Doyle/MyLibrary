const express = require('express')
const router = express.Router()
const Author = require('../models/author.js')


//all authors
router.get('/', (req, res) => {
    res.render('authors/index');
})

//new authors
router.get('/new', (req, res) => {
    res.render('authors/new', {
        author: new Author()
    });
})

//create author
router.post('/', (req, res) => {
    res.send('create');
})



module.exports = router