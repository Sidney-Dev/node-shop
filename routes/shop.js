const express = require('express')
const router = express.Router()

// use works for all HTTP methods 
router.get('/', (req, res, next) => {
    res.send("<h1>Home page")
}) 

module.exports = router