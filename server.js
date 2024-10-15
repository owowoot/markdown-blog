// creates server
const express = require('express');
// create app by calling express as a function
const app = express();
// creates index route for our port. req = request; res = response
app.get('/', (req, res) => {
    res.send('Hello World')
})
// allows us to start up our port at localhost:5000
app.listen(5000)