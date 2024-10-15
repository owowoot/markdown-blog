// creates server
const express = require('express');
// create app by calling express as a function
const app = express();
// writing our views using ejs, view engine will convert all that ejs code to html
app.set('view engine', 'ejs')
// creates index route for our port. req = request; res = response
app.get('/', (req, res) => {
    res.render('index')
})
// allows us to start up our port at localhost:5000
app.listen(5000)