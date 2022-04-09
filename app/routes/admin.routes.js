const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

//get all ip address
router.get("/",adminController.getIpaddressList);

//create ip address
router.post("/",adminController.createNewIpaddress);

//delete all ipaddress
router.delete("/",adminController.deleteAllIpaddress);


//delete ipaddress
router.delete("/:ipaddress",adminController.deleteIpaddress);

module.exports = router;