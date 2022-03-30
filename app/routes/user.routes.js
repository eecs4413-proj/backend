
  const router = require("express").Router();
  const {createUser, getUserByEmail,getUsers,updateUsers,deleteUser,login} = require("../controllers/user.controller.js");
  const { checkToken } = require("../auth/token_validation");

  
  // Create new User
  router.post("/", createUser);


  //Retrieve Users
  router.get("/",checkToken,getUsers);

  //Retrieve Single User
  router.get("/:email",checkToken,getUserByEmail);

//Update User 
  router.patch("/",checkToken,updateUsers);

  //Delete 
  router.delete("/",checkToken,deleteUser);

  //login
  router.post("/login",login);
  module.exports = router;
  

