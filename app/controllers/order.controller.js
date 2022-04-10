const Order = require("../models/order.model");
const OrderModel = require("../models/order.model");
const OrderedItem = require("../models/orderedItem.model");
const OrderItemModel = require("../models/orderedItem.model");

//get all order list 
exports.getOrderlist = (req, res) =>{
    OrderModel.getAllOrders((err,orders)=>{
        if(err) res.send(err);
        res.send(orders);
    });
};

//get order by userEmail 
exports.getOrderByuserEmail = (req,res) =>{
    OrderModel.getOrderByUserEmail(req.params.userEmail,(err,order)=>{
        if(err) res.send(err);
        console.log("Single Order data", order);
        res.send(order);
    });
};

//Create new order 
exports.createNewOrder = (req,res) => {
    const orderReqData = new Order(req.body);
    console.log("orderReqData",orderReqData);
    //check null

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.sendStatus(400);
        res.send({sucess: false, message: "Please fill all fields"});
    }else{
        console.log("valid data");
        OrderModel.createOrder(orderReqData,(err,order)=> {
            if(err) res.send(err);
            res.json({
                status: true,
                message: "Order created successfully",
                data: order.insertuserEmail,
            });
        });
    }
};

// Update Order
exports.updateOrder = (req,res) => {
    const orderReqData = new Order(req.body);
    console.log("orderReqData update", orderReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.sendStatus(400);
        res.send({sucess: false, message: "Please fill all fields"});
    }else{
        console.log("valid data");
        OrderModel.updateOrder(req.params.userEmail, orderReqData,(err,order)=>{
            if(err) res.send(err);
            res.json({status: true, message: "Order updated successfully"});
        });
    }
};

//delete single order by userEmail 
exports.deleteOrder = (req,res)=>{
    OrderModel.deleteOrder(req.params.userEmail,(err,order)=> {
        if(err){
            res.send(err);
        }
        res.json({sucess: true, message: "Order deleted successfully"});
    });
};

//delete single order by userEmail + orderNo 
exports.deleteOrderWithOrderNo = (req,res)=>{
    OrderModel.deleteOrderbyuserEmailandOrderNo(req.params.userEmail,req.params.orderNo,(err,order)=> {
        if(err){
            res.send(err);
        }
        res.json({sucess: true, message: "Order deleted successfully"});
    });
};

// Delete all order

exports.deleteAllOrder = (req, res) => {
    OrderModel.deleteAllOrders((err,orders)=> {
        if(err){
            res.send(err);
        }
        res.json({sucess: true, message: "All order deleted successfully"});
    });
};


//get OrderedItem List 
exports.getOrderedItem = (req,res) =>{
    OrderItemModel.getOrderedItemList((err, ordereditems)=>{
        if(err) res.send(err);
        res.send(ordereditems);
    });
};

//get Ordered Item by orderNo 
exports.getOrderedItemByON = (req,res) => {
    OrderItemModel.getOrderedItemByOrderNo(req.params.orderNo,(err, ordereditem)=> {
        if(err) res.send(err);
        console.log("Single ordered item data", ordereditem);
        res.send(ordereditem);
    });
};

//Create new Ordered Item 

exports.createNewOrderedItem = (req, res) =>{
    const orderItemReqData = new OrderedItem(req.body);
    console.log("orderItemReqData",orderItemReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.sendStatus(400);
        res.send({sucess: false, message: "Please fill all fields"});
    }else {
        console.log("valid data");
        OrderItemModel.createOrderedItem(orderItemReqData, (err, orderitem)=>{
            if(err) res.send(err);
            res.json({
                status: true,
                message: "Item created successfully",
                data: orderitem.insertorderNo,
            });
        });
    }
};

//Update a orderedItem 

exports.updateOrderedItem = (req,res) => {
    const orderedItemReqData = new OrderedItem(req.body);
    console.log("orderedItemReqData", orderedItemReqData);

    if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.sendStatus(400);
        res.send({sucess: false, mesage: "Please fill all fields"});
    }else{
        console.log("valid data");
        OrderItemModel.updateOrderedItem(req.params.orderNo, orderedItemReqData, (err, orderItem)=>{
            if(err) res.send(err);
            res.json({ status: true, message: "User updated sucessfully"});
        });
    }
};

//Delete a Item with orderNo and itemNo

exports.deleteItemWithOrderNoandItemNo = (req,res)=> {
    OrderItemModel.deleteOrderedItemByOrderNoandItemNo(req.params.orderNo,req.params.itemNo,(err,orderItem)=>{
        if(err){
            res.send(err);
        }
        res.json({ sucess: true, message: "Single Ordered Item deleted successfully"});
    });
};

exports.deleteOrderWithOrderNo = (req,res) => {
    OrderItemModel.deleteOrderedItembyOrderNo(req.params.orderNo,(err,orderitem)=>{
        if(err){
            res.send(err);
        }
        res.json({sucess: true, message: "Ordered Items deleted successfully by OrderNo "});
    });
};