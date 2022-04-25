const express = require('express')
const router = express.Router()
const models = require('../models/inventory')
const db = require('../models/db')

//The first page of the website '/'
router.get('/', function(req, res) {
        try {
    
          db.query("SELECT * FROM food", (error, result) => {
            if(error){
              console.log(error);
            }else{
              res.render('inventory', {'result': result, 'post': false})
    
            }
          })
        } 
        catch(e) {
            console.log(e);
            res.send("Error! Please try again")
        }
})

router.post('/consume/:FoodID', models.consume)
router.post('/throw/:FoodID', models.throw)

module.exports = router