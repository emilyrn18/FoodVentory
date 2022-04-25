const db = require('./db'); //require the database
//getting values from the user and storing in the database
// this one? 
exports.inventory = async(req, res) => {
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
    catch {
        res.send("Error! Please try again")
    }
}