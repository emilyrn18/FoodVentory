const express = require('express')
const router = express.Router()

//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('inventory')
})

// router.post('/inventory', models.inventory)
module.exports = router