const express = require('express')
const router = express.Router()
const models = require('../models/foodtypeselector');
const db = require('../models/db')

//The first page of the website '/'
router.get('/', function(req, res) {
    try {
        db.query("SELECT * FROM foodtype", async(error, result) => {
            console.log("In query");
            if(error){
                console.log(error);
            }else{
                //res.send("Success! You are now registered")
                //res.status(200).redirect('/')
                res.render('addnewitem', {'typeData': result})
                console.log(result);
            }
        })
    } 
    catch(e) {
        console.log(e);
        res.send("Error! Please try again")
    }
    // res.render('addnewitem')
})

router.post('/addnewitem', models.addnewitem)
module.exports = router