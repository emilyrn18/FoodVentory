const express = require('express')
const router = express.Router()

//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('addolditem')
})

// router.post('/addolditem', models.addolditem)
module.exports = router