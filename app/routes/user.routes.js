const router = require("express").Router();
const {
  createAddress,
  createUser,
  getUserByEmail,
  getAddressByEmail,
  getUsers,
  updateUsers,
  updateAddress,
  deleteUser,
  deleteAdress,
  login,
} = require("../controllers/user.controller.js");
const { checkToken } = require("../auth/token_validation");

//Retrieve Users
router.get("/", getUsers);

//Retrieve Single User
router.get("/:email", checkToken, getUserByEmail);

//Retrieve address by userEmail
router.get("/address/:userEmail",getAddressByEmail);

// Create new User
router.post("/", createUser);

// Create new Address
router.post("/address",createAddress);

//login
router.post("/login", login);

//Update User
router.patch("/", checkToken, updateUsers);

//Update Address by userEmail
router.patch("/address" ,updateAddress);

//Delete User
router.delete("/", checkToken, deleteUser);

//Delete Address
router.delete("/address", deleteAdress);

module.exports = router;
