const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

//get all orders
router.get("/", orderController.getOrderlist);

//get Order by userEmail
router.get("/:userEmail",orderController.getOrderByuserEmail);

//create new order 
router.post("/",orderController.createNewOrder);

//delete all order
router.delete("/",orderController.deleteAllOrder);

router.delete("/:userEmail/:orderNo",orderController.deleteOrderWithOrderNo);

//delete a order with userEmail 
router.delete("/:userEmail", orderController.deleteOrder);

//update order with userEmail 
router.put("/:userEmail",orderController.updateOrder);


//get orderedItem 
router.get("/orderItem", orderController.getOrderedItem);

//get orderedItem by orderNo
router.get("/orderItem/:orderNo",orderController.getOrderedItemByON);

//create orderedItem
router.post("/orderItem",orderController.createNewOrderedItem);

//delete orderedItem with orderNo + itemNo
router.delete("/orderItem/:orderNo/:itemNo",orderController.deleteItemWithOrderNoandItemNo);

//delete orderItem with orderNo
router.delete("/orderItem/:orderNo",orderController.deleteOrderWithOrderNo);

module.exports = router;
