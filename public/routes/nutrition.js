const express = require('express')
const router = express.Router()
const models = require('../models/nutrition')
const db = require('../models/db')

//The first page of the website '/'
router.get('/', function(req, res) {
    try {
        //console.log("Nutrition ",req)
        db.query("SELECT * FROM nutrition WHERE NutritionID=" + req.params.NutrID, (error, result) => {
            if(error){
              console.log(error);
            }else{
                try {
                    db.query("SELECT * FROM food WHERE NutritionID=" + req.query.nutrID, (error, foods) => {
                        if(error){
                          console.log(error);
                        }else{
                            res.render('nutrition',  {'result': result, 'foodName': foods[0].name, 'quantity':foods.length})
                            
                        }
                      })
                    } 
                    catch(e) {
                        console.log(e);
                        res.send("Error! Please try again")
                    }
                
            }
          })
        } 
        catch(e) {
            console.log(e);
            res.send("Error! Please try again")
        }
})


// router.post('/n/:NutritionID', models.getNutrition)
module.exports = router
