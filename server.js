// creates server
const express = require('express');
// access to router from articles folder
const articleRouter = require('./routes/articles')
// create app by calling express as a function
const app = express();
// writing our views using ejs, view engine will convert all that ejs code to html
app.set('view engine', 'ejs');
// adds it into /articles 
app.use('/articles', articleRouter)
// creates index route for our port. req = request; res = response
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    // passing all articles onto our index
    res.render('articles/index', { articles: articles })
})
// allows us to start up our port at localhost:5000
app.listen(5000);