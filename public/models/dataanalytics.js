const db = require('./db'); //require the database

exports.showType = async(req, res) => {
    try {
        if(req.params.FoodTypeID != null){
            db.query("SELECT * FROM food WHERE FoodTypeID='"+req.params.FoodTypeID+"'", (error, result) => {
                if(error){
                    console.log(error);
                }else{
                    res.render('foodbytype', {'result': result, 'post': false})
                }
            })
        }else{
            db.query("SELECT * FROM food", (error, result) => {
                if(error){
                  console.log(error);
                }else{
                  res.render('foodbytype', {'result': result, 'post': false})
        
                }
            })
        }
    }catch(e){
        console.log(e);
        res.send("Error! Please try again");
    }
}