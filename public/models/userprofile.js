/**
 * Here, we will connect to DB for user profile page and data changes
 */

 const db = require('./db'); //require the database
 //for encrypting the password
 const bcrypt = require('bcrypt')
 
 //getting values from the user and storing in the database
 exports.userprofile = async(req, res) => {
     try {
 
       const hashedPassword = await bcrypt.hash(req.body.newpassword, 10)
       const email = req.body.emailC;
       // console.log("User name", name);
 
       db.query('UPDATE user SET Password =? WHERE Username =?', [hashedPassword, email] , (error, result) => {
         if(error){
           console.log(error);
         }else{
           //res.send("Success! You are now registered")
           res.status(200).redirect('/')
         }
       })
     } 
     catch(e) {
         console.log(e);
         res.send("Error! Please try again")
     }
 }