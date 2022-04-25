const express = require('express')
const router = express.Router()
// const models = require('../models/foodtypeselector');

//The first page of the website '/'
router.get('/', function(req, res) {
    res.render('additem')
})

// router.post('/additem', models.addnewitem)
module.exports = router