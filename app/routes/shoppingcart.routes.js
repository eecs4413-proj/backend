
    const router = require("express").Router();
    const shoppingcartController = require("../controllers/shoppingcart.cont");

    //Retrieve all shoppingcarts
    router.get("/", shoppingcartController.getShoppingCartList);

    //Retrieve a shoppingcart with userID (email)
    router.get("/:userID",shoppingcartController.getShoppingCartByuserID);

    //Create new shoping cart 
    router.post("/",shoppingcartController.createNewShopingCart);

    //Update a shoppingcar with userID 
    router.put("/:userID",shoppingcartController.updateShoppingCart);

    //Delete all shoppingcarts
    router.delete("/",shoppingcartController.deleteAllShoppingCart);

    //Delete a shoppingcart with userID 
    router.delete("/:userID",shoppingcartController.deleteShoppingCart);

module.exports = router;