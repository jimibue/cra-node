const router = require('express').Router()

// connect your API routes here!
router.use('/authors', require('./authors'))

module.exports = router
