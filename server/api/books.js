const router = require('express').Router();
const {Author, Book} = require('../db')

// get => '/api/books'
router.get('/',(req,res,next)=>{
    console.log('-----------')
    console.log(`yo a get => '/api/books' request was made`)
    console.log('-----------')
    res.json([])
})
// get => '/api/books/:id'
router.get('/:id',(req,res,next)=>{
    console.log('-----------')
    console.log(`yo a get => '/api/books/:id' request was made`)
    console.log('-----------')
    res.json([])
})


module.exports = router