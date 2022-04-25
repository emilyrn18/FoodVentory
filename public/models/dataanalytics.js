const db = require('./db'); //require the database

exports.showmeat = async(req, res) => {
    console.log("inside meat data");
    try {
        db.query("SELECT * FROM food WHERE Use_Time IS null AND FoodTypeID='"+req.params.FoodTypeID+"'", (error, result) => {
            if(error){
                console.log(error);
            }else{
                res.render('foodbytype', {'result': result, 'post': false})
            }
        })
    }catch(e){
        console.log(e);
        res.send("Error! Please try again");
    }
}