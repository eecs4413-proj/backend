const Item = require('../models/catalogue.model');
const ItemModel = require('../models/catalogue.model');


//get all item list 
exports.getItemList = (req,res) =>{
    ItemModel.getAllItems((err,items)=>{
        if(err)
        res.send(err);
        res.send(items);
    })
}

//get item by bid from DB
exports.getItembyBid = (req,res) =>{
    ItemModel.getItemByBid(req.params.bid,(err,item)=>{
        if(err)
        res.send(err);
        console.log('Single item data', item);
        res.send(item);
    })
}