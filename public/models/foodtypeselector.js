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

        const uniqueNutId = Math.floor(Math.random() * 1000000000);
        const uniqueUserId = 'b65207cc';


        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        db.query("INSERT INTO nutrition (NutritionID, Total_Fat, Serving_Size, Calories, Sugar, Total_Calories, Sodium, Protein) VALUES ('"+uniqueNutId+"','"+fatVar+"','"+servingSize+"','"+cals+"','"+sugarVar+"','"+totalCalories+"','"+sodiumVar+"','"+proteinVar+"')", (error, result) => {
            if(error){
              console.log(error);
            }else{
              console.log("Success add to nutrition");
            }
        })
        
        // var fType = null;
        db.query("SELECT FoodTypeID FROM foodtype WHERE Category='"+theFoodType+"'", (error, foodtypeid) => {
            if(error){
              console.log(error);
            }else{
              console.log("Success get food type id");

              for(i=0;i<quantityVar;i++){
                const uniqueItemId = Math.floor(Math.random() * 1000000000);
                db.query("INSERT INTO food (ItemID, User_ID, NutritionID, FoodTypeID, Cost, Expiration_Date, Purchase_Time, Storage, name) VALUES ('"+uniqueItemId+"','"+uniqueUserId+"','"+uniqueNutId+"','"+foodtypeid[0].FoodTypeID+"','"+costUSD+"','"+expDate+"','"+today+"','"+storageType+"','"+itemName+"')", (error, result2) => {
                  if(error){
                    console.log(error);
                  }else{
                    console.log("Success add food item");
                  }
                })
              }
              console.log("DONE!");
              res.status(200).redirect('/inventory');
            }
        })

    } catch(e){
        console.log(e);
        res.send("Error! Please try again");
    }
}

exports.addolditem = async(req, res) => {
  console.log("inside old item function");
  try {
    const itemName = req.body.currentfooditems;
    const quantityVar = req.body.quantity;
    db.query("SELECT quantity FROM food WHERE name='"+itemName+"'", (error, quantity_in_inventory) => {
      if(error){
        console.log(error);
      }else{
        var newQuantity = quantity_in_inventory[0].quantity + parseInt(quantityVar);
        db.query("UPDATE food SET quantity='"+newQuantity+"' WHERE name='"+itemName+"'", (error, response) => {
          if(error){
            console.log(error);
          }else{
            console.log("Success add old food item");
            res.status(200).redirect('/inventory');
          }
        })
      }
    })

  } catch(e){
        console.log(e);
        res.send("Error! Please try again");
  }
}