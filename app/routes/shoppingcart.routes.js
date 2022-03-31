const router = require("express").Router();
const shoppingcartController = require("../controllers/shoppingcart.controller");

//Retrieve all shoppingcarts
router.get("/", shoppingcartController.getShoppingCartList);

//Retrieve a shoppingcart with userEmail (email)
router.get("/:userEmail", shoppingcartController.getShoppingCartByuserEmail);

//Create new shoping cart
router.post("/", shoppingcartController.createNewShopingCart);

//Update a shoppingcar with userEmail
router.put("/:userEmail", shoppingcartController.updateShoppingCart);

//Delete all shoppingcarts
router.delete("/", shoppingcartController.deleteAllShoppingCart);

//Delete a shoppingcart with userEmail
router.delete("/:userEmail", shoppingcartController.deleteShoppingCart);

//Delete a item in userEmail's shoppingcart
router.delete("/:userEmail/:itemNo", shoppingcartController.deleteItemInShoppingCart);

module.exports = router;
