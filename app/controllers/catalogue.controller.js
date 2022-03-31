const Item = require("../models/catalogue.model");
const ItemModel = require("../models/catalogue.model");

//get all item list
exports.getItemList = (req, res) => {
  ItemModel.getAllItems((err, items) => {
    if (err) res.send(err);
    res.send(items);
  });
};

//get item by bid from DB
exports.getItembyBid = (req, res) => {
  ItemModel.getItemByBid(req.params.bid, (err, item) => {
    if (err) res.send(err);
    console.log("Single item data", item);
    res.send(item);
  });
};

//Create new Item
exports.createNewItem = (req, res) => {
  const itemReqData = new Item(req.body);
  console.log("itemReqData", itemReqData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ sucess: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    ItemModel.createItem(itemReqData, (err, item) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Item created successfully",
        data: item.insertbid,
      });
    });
  }
};

//Update a item
exports.updateItem = (req, res) => {
  const itemReqData = new Item(req.body);
  console.log("itemReqData update", itemReqData);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ sucess: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    ItemModel.updateItem(req.params.bid, itemReqData, (err, item) => {
      if (err) res.send(err);
      res.json({ status: true, message: "User updated sucessfully" });
    });
  }
};

//Delete a Item with bid
exports.deleteItem = (req, res) => {
  ItemModel.deleteItem(req.params.bid, (err, item) => {
    if (err) {
      res.send(err);
    }
    res.json({ success: true, message: "Item deleted successfully" });
  });
};

//Delete all item
exports.deleteAllItem = (req, res) => {
  ItemModel.deleteAllItems((err, items) => {
    if (err) {
      res.send(err);
    }
    res.json({ sucess: true, message: "All items deleted sucessfully" });
  });
};
