const db = require('./db'); //require the database
//for encrypting the password
const bcrypt = require('bcrypt')
const crypto = require('crypto')

//getting values from the user and storing in the database
exports.createacc = async(req, res) => {
    try {

      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const name = req.body.fname + " " + req.body.lname;
      // console.log("User name", name);
      const uniqueId = crypto.randomBytes(4).toString('hex');
      // console.log("My id", uniqueId);

      db.query("INSERT INTO user (UserID, Name, Age, Username, Password) VALUES ('"+uniqueId+"','"+name+"','"+req.body.bdate+"','"+req.body.email+"','"+hashedPassword+"')", (error, result) => {
        if(error){
          console.log(error);
        }else{
          //res.send("Success! You are now registered")
          res.status(200).redirect('/')
          //todo: maybe tell the user to go to login, redirecting to login after account creation
        }
      })

      db.query("INSERT INTO usertype (UserID, TypeOfUser) VALUES ('"+uniqueId+"','"+type+"')", (error, result) => {
        if(error){
          console.log(error);
        }else{
          //do nothing
          console.log("Success on adding type");
        }
      })


    } 
    catch(e) {
        console.log(e);
        res.send("Error! Please try again")
    }
}