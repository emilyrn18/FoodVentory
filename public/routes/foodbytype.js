const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.render('foodbytype')
})

// router.post('/addolditem', models.addolditem)
module.exports = router