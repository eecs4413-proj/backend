const e = require('express');
var dbConn = require('../config/db.config');

var Item = function(item){
    this.bid = item.bid;
    this.name = item.name;
    this.description = item.description;
    this.type = item.type;
    this.brand = item.brand;
    this.stock = item.stock;
    this.imgsrc = item.imgsrc;
    this.price = item.price;
}

//get all items 
Item.getAllItems = (result) => {
    dbConn.query('SELECT * FROM Item',(err,res)=>{
        if(err){
            console.log('Error while fetching items',err);
            result(null,err);
        }else{
            console.log('Items fetched successfully');
            result(null,res);
        }
    })
}

//get item by bid from DB
Item.getItemByBid = (bid,result) =>{
    dbConn.query('SELECT * FROM Item WHERE bid=?',bid,(err,res)=>{
        if(err){
            console.log('Error while fetching item by bid',err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}

module.exports = Item;