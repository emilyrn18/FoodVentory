const db = require('./db'); //require the database

exports.consume = async(req, res) => {
    try {
    now = new Date().toISOString().substring(0,10);
    db.query("UPDATE food SET Use_Time = '" + now + "' WHERE ItemID = " + req.params.FoodID, (error, result) => {
        if(error){
          console.log(error);
        }else{
          res.status(200).redirect('/inventory')
        }
      })
    } 
    catch(e) {
        console.log(e);
        res.send("Error! Please try again")
    }
}

exports.throw = async(req, res) => {
    try {
    db.query(" DELETE * FROM food WHERE ItemID = " + req.params.FoodID, (error, result) => {
        if(error){
          console.log(error);
        }else{
            res.render('/');
        }
      })
    } 
    catch(e) {
        console.log(e);
        res.send("Error! Please try again")
    }
}