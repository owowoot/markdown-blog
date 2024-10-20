// all routes directly related to articles
// set up express
const express = require('express');
// set up router by calling it as a function. This will give a router that can create views similar to app.get
const router = express.Router();
// will only render this after /articles.
router.get('/new', (req, res) => {
    res.send('articles/new')
})

router.post('/', (req, res) => {

})
// we need to export so that we can read in this router
module.exports = router