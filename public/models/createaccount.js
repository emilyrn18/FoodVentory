const db = require('./db'); //require the database
//for encrypting the password
const bcrypt = require('bcrypt') 

//getting values from the user and storing in the database
exports.createaccount = async(req, res) => {
    try {

      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      db.query("INSERT INTO users (Name, Institution, Email, Password) VALUES ('"+req.body.name+"','"+req.body.institution+"','"+req.body.email+"','"+hashedPassword+"')", (error, result) => {
        if(error){
          console.log(error);
        }else{
          res.send("Success! You are now registered")
          //todo: maybe tell the user to go to login, redirecting to login after account creation
        }
      })
    } 
    catch {
        res.send("Error! Please try again")
    }
}
