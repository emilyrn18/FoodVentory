const express = require('express')
const router = express.Router()

//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('createaccount')
})

// router.post('/createaccount', models.createaccount)
module.exports = router
