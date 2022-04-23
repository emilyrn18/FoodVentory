const express = require('express')
const router = express.Router()
const models = require('../models/login')
router.get('/', function(req, res) {
    res.render('login')
})

// router.post('/login', models.login)
module.exports = router