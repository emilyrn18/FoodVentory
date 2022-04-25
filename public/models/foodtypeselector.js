const db = require('./db'); //require the database
const crypto = require('crypto');
const { ftruncate } = require('fs');


exports.addnewitem =  async(req, res) =>{
    console.log("inside function");
    // Storing DATA HERE to DATABASE
    try {
        const itemName = req.body.itemname;
        const expDate = req.body.expiration;
        const costUSD = req.body.cost;
        const storageType = req.body.storage;
        const theFoodType = req.body.foodtype;

         console.log(theFoodType);

        const fatVar = req.body.fat;
        const servingSize = req.body.servingsize;
        const cals = req.body.calories;
        const sugarVar = req.body.sugar;
        const totalCalories = req.body.totalcalories;
        const sodiumVar = req.body.sodium;
        const proteinVar = req.body.protein;
        const quantityVar = req.body.quantity;

        const uniqueNutId = 888888888;
        const uniqueItemId = 102384566;
        const uniqueUserId = 'b65207cc';


        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        db.query("INSERT INTO nutrition (NutritionID, Total_Fat, Serving_Size, Calories, Sugar, Total_Calories, Sodium, Protein) VALUES ('"+uniqueNutId+"','"+fatVar+"','"+servingSize+"','"+cals+"','"+sugarVar+"','"+totalCalories+"','"+sodiumVar+"','"+proteinVar+"')", (error, result) => {
            if(error){
              console.log(error);
            }else{
              console.log("Success add to nutrition");
              //res.send("Success! You are now registered")
              // res.status(200).redirect('/')
              //todo: maybe tell the user to go to login, redirecting to login after account creation
            }
        })
        
        // var fType = null;
        db.query("SELECT FoodTypeID FROM foodtype WHERE Category='"+theFoodType+"'", (error, foodtypeid) => {
            if(error){
              console.log(error);
            }else{
              //res.send("Success! You are now registered")
              // res.status(200).redirect('/')
              //todo: maybe tell the user to go to login, redirecting to login after account creation
              console.log("Success get food type id");
              db.query("INSERT INTO food (ItemID, User_ID, NutritionID, FoodTypeID, Cost, Expiration_Date, Purchase_Time, Storage, Name) VALUES ('"+uniqueItemId+"','"+uniqueUserId+"','"+uniqueNutId+"','"+foodtypeid[0].FoodTypeID+"','"+costUSD+"','"+expDate+"','"+today+"','"+storageType+"','"+itemName+"')", (error, result2) => {
                if(error){
                  console.log(error);
                }else{
                  //res.send("Success! You are now registered")
                  console.log("Success add food item");
                  res.status(200).redirect('/inventory');
                  //todo: maybe tell the user to go to login, redirecting to login after account creation
                }
              })
            }
        })

    } catch(e){
        console.log(e);
        res.send("Error! Please try again");
    }
}