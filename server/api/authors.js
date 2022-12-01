const router = require('express').Router();
const {Author, Book} = require('../db')

// get => '/api/authors'
router.get('/',async(req,res,next)=>{

    // i will get authors
    // psql request
    try{
       const authors = await Author.findAll()
       res.json(authors)
    } catch(err){
        next(err)
    }

})
// get => '/api/authors/:id'
router.get('/:id', async(req,res,next)=>{
   try{
     const author = await Author.findByPk(req.params.id)
     res.json(author)
   }catch(err){
    next(err)
   }
})


module.exports = router

