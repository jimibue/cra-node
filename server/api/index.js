const router = require('express').Router()

// connect your API routes here!
router.use('/authors', require('./authors'))
router.use('/books', require('./books'))

module.exports = router
