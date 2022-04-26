const express = require('express')
const router = express.Router()
const models = require('../models/dataanalytics');
const db = require('../models/db')


router.get('/', function(req, res) {
    try {
    
        db.query("SELECT * FROM food", (error, result) => {
          if(error){
            console.log(error);
          }else{
            console.log("getting the results");
            db.query("SELECT * FROM food WHERE Use_Time IS null", (error, realresult) => {
              if(error){
                console.log(error);
              }else{
                console.log("getting the results");
                res.render('foodbytype', {'result': result, 'realresult': realresult, 'post': false})

              }
            })
          }
        })
      } 
      catch(e) {
          console.log(e);
          res.send("Error! Please try again")
      }
})

router.post('/showType/:FoodTypeID', models.showType);
module.exports = router