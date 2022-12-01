const router = require('express').Router();
const {Author, Book} = require('../db')

// get => '/api/authors'
router.get('/',(req,res,next)=>{
    console.log('-----------')
    console.log(`yo a get => '/api/authors' request was made`)
    console.log('-----------')
})
// get => '/api/authors/:id'
router.get('/:id',(req,res,next)=>{
    console.log('-----------')
    console.log(`yo a get => '/api/authors/:id' request was made`)
    console.log('-----------')
})


module.exports = router

