const db = require('./db'); //require the database

exports.getNutrition = async(req, res) => {
    try {
    console.log(req.params.NutritionID);
    db.query("SELECT nutrition WHERE NutritionID=" + req.params.NutritionID, (error, result) => {
        if(error){
          console.log(error);
        }else{
            console.log(result);
            res.render('nutrition')
        }
      })
    } 
    catch(e) {
        console.log(e);
        res.send("Error! Please try again")
    }
}