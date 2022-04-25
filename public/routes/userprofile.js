const express = require('express')
const router = express.Router()
//const models = require('../models/userprofile')

router.get('/', function(req, res) {
    res.render('userprofile')
})

// router.post('/userprofile', models.createacc)
module.exports = router