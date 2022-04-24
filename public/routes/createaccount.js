const express = require('express')
const router = express.Router()
const models = require('../models/createaccount')
//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('createaccount')
})

router.post('/createacc', models.createacc)
module.exports = router
