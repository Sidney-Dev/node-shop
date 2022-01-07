const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const mainRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false})) // this is used to parse the body content
app.use(express.static(path.join(__dirname, 'public'))) // grant access to public files

app.use('/admin', adminRoutes) // route group
app.use(mainRoutes)

// use works for all HTTP methods express
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)