const express = require('express');
const router = express.Router();

const itemController = require('../controllers/catalogue.cont');

//get all items
router.get('/',itemController.getItemList);

//get Item by bid
router.get('/:bid',itemController.getItembyBid);

module.exports = router;