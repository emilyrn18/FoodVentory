const express = require('express')
const router = express.Router()

//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('addnewitem')
})

// router.post('/addnewitem', models.addnewitem)
module.exports = router