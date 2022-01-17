const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const adminData = require('./routes/admin')
const mainRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false})) // this is used to parse the body content
app.use(express.static(path.join(__dirname, 'public'))) // grant access to public files

app.use('/admin', adminData.routes) // route group
app.use(mainRoutes)

// use works for all HTTP methods express
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render('404', { pageTitle: "Page not found"})
})

app.listen(3000)