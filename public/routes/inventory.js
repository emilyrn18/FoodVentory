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
              console.log(result);
              res.render('inventory', {'result': result, 'post': false})
    
              //return result;
    
              //todo: maybe tell the user to go to login, redirecting to login after account creation
            }
          })
        } 
        catch(e) {
            console.log(e);
            res.send("Error! Please try again")
        }
    //res.render('inventory')
})

router.get('/inventory', models.inventory)
// router.get('/inventory', (req, res) => {
//     console.log('birds and bears');
//     //res.render('/createaccount')
//     //models.loadUserFood();
//     //res.send('Birds home page')
//   })

module.exports = router