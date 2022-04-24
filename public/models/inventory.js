const db = require('./db'); //require the database
//getting values from the user and storing in the database
const loadUserFood = async(req, res) => {
    try {

        console.log('it worked!');
        console.log(req);
    //   db.query("INSERT INTO users (Name, Institution, Email, Password) VALUES ('"
    //   +req.body.name+"','"+req.body.institution+"','"+req.body.email+"','"
    //   +hashedPassword+"')", (error, result) => {
    //     if(error){
    //       console.log(error);
    //     }else{
    //       res.send("Load Successful")
    //       //todo: maybe tell the user to go to login, redirecting to login after account creation
    //     }
    //   })
    } 
    catch {
        res.send("Error! Please try again")
    }
}

export {loadUserFood}
