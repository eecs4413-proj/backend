const express = require("express");
const router = express.Router();

const itemController = require("../controllers/catalogue.controller");

//get all items
router.get("/", itemController.getItemList);

//get Item by bid
router.get("/:bid", itemController.getItembyBid);

//create new item
router.post("/", itemController.createNewItem);

//delete all item
router.delete("/", itemController.deleteAllItem);

//delete a item with bid
router.delete("/:bid", itemController.deleteItem);

//update item with bid
router.put("/:bid", itemController.updateItem);

//Review APIs
router.get("/review/:bid", itemController.getReview);

router.post("/review", itemController.createNewReview);

router.delete("/review/:reviewNo", itemController.deleteReview);

router.put("/review/:reviewNo", itemController.updateReview);
module.exports = router;
