const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

//get all ip address
router.get("/ip",adminController.getIpaddressList);

//get all items
router.get("/ordered", adminController.getOrderedItems);

//get number of order attempts
router.get("/checkout", adminController.getOrderAttempts);

//create ip address
router.post("/",adminController.createNewIpaddress);

//post increasing number of order attempts
router.post("/checkout", adminController.postOrderAttempts);

//delete all ipaddress
router.delete("/",adminController.deleteAllIpaddress);

//delete ipaddress
router.delete("/:ipaddress",adminController.deleteIpaddress);

module.exports = router;