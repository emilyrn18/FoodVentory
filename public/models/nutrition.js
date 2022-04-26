const db = require('./db'); //require the database

exports.update =  async(req, res) => {
    try {
    var colbuilder = [];

    if (req.body.fat.length){
        colbuilder.push("Total_Fat=" + req.body.fat);
    }
    if (req.body.serving_size.length){
        colbuilder.push("Serving_Size="+ req.body.serving_size);
    }
    if (req.body.calories.length){
        colbuilder.push("Calories=" + req.body.calories);
    }
    if (req.body.sugar.length){
        colbuilder.push("Sugar=" + req.body.sugar);
    }
    if (req.body.total_calories.length){
        colbuilder.push("Total_Calories=" + req.body.total_calories);
    }
    if (req.body.sodium.length){
        colbuilder.push("Sodium=" + req.body.sodium);
    }
    if (req.body.protein.length){
        colbuilder.push("Protein=" + req.body.protein);
    }
    var combcol = colbuilder.join(', ');

    db.query( "UPDATE nutrition SET " + combcol + " WHERE NutritionID="  + req.params.NutrID, (error, result) => {
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