const express = require('express')
const router = express.Router()

//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('additem')
})

// router.post('/additem', models.additem)
module.exports = router