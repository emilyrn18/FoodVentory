const express = require('express')
const router = express.Router()
const models = require('../models/foodtypeselector');
const db = require('../models/db');

//The first page of the website '/'
router.get('/', function(req, res) {
    try {
        db.query("SELECT DISTINCT name FROM food", async(error, result) => {
            console.log("In query");
            if(error){
                console.log(error);
            }else{
                //res.send("Success! You are now registered")
                //res.status(200).redirect('/')
                res.render('addolditem', {'inventoryData': result});
                console.log(result);
            }
        })
    } 
    catch(e) {
        console.log(e);
        res.send("Error! Please try again")
    }
})

router.post('/addolditem', models.addolditem)
module.exports = router