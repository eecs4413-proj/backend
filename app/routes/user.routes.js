module.exports = (app) => {
  const router = require("express").Router();
  const userController = require("../controllers/user.controller.js");

  // Retrieve all Users
  router.get("/", userController.getUserList);
  // Retrieve a User with email
  router.get("/:email", userController.getUserByEmail);

  // Create new User
  router.post("/", userController.createNewUser);

  // Update a User with email
  router.put("/:email", userController.updateUser);

  // Delete all Users
  router.delete("/", userController.deleteUser);
  // Delete a User with email
  router.delete("/:email", userController.deleteUser);

  app.use("/api/user", router);
};
