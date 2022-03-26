var dbConn = require("../config/db.config");

var ShoppingCart = function(shoppingcart) {
    this.userID = shoppingcart.userID;
    this.itemID = shoppingcart.itemID;
    this.quantity = shoppingcart.quantity;
}

//Retrieve all shoppingcart 

ShoppingCart.getAllShoppingCarts = (result) => {
    dbConn.query("SELECT * FROM ShoppingCart", (err,res)=>{
        if(err){
            console.log("Error while fetching shoppingcarts",err);
            result(null,err);
        }else {
            console.log("ShoppingCarts fetched successfully");
            result(null,res);
        }
    });
};

//Retrieve ShoppingCart with userID
ShoppingCart.getShoppingCartByuserID = (userID, result) => {
    dbConn.query("SELECT * FROM ShoppingCart WHERE userID=?", userID, (err,res)=> {
        if(err) {
            console.log("Error while fetching shoppingcart by userID",err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
};

//Create new ShoppingCart
ShoppingCart.createShoppingCart = (shoppingcartData,result)=>{
    dbConn.query("INSERT INTO ShoppingCart SET ?", shoppingcartData, (err, res) => {
        if(err){
            console.log("Error while inserting data");
            result(null,err);
        }else{
            console.log("ShoppingCart Created Successfully");
            result(null,res);
        }
    });
};

//Update ShoppingCart 
ShoppingCart.updateShoppingCart = (userID,shoppingcartReqData,result) =>{
    dbConn.query(
        "UPDATE ShoppingCart SET itemID=?, quantity=? WHERE userID = ?",
        [shoppingcartReqData.itemID, shoppingcartReqData.quantity,userID],
        (err,res) => {
            if(err){
                console.log("Error while updating the record");
                result(null,err);
            }else{
                console.log("ShoppingCart Updated Successfully");
                result(null,res);
            }
        });
};

// Delete a ShoppingCart with userID
ShoppingCart.deleteShoppingCart = (userID,result) => {
    dbConn.query("DELETE FROM ShoppingCart WHERE userID=?",userID,(err,res)=>{
        if(err){
            console.log("Error while deleting the shoppingcart",err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
};

// Delete all ShoppingCart
ShoppingCart.deleteAllShoppingCart = (result) => {
    dbConn.query("DELETE FROM ShoppingCart", (err,res)=>{
        if(err){
            console.log("Error While deleting Shoppingcart",err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
};
module.exports = ShoppingCart;