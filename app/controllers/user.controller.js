const User = require("../models/user.model");
const UserModel = require("../models/user.model");

// Retrieve all User list
exports.getUserList = (req, res) => {
  //console.log('here all user list');
  UserModel.getAllUsers((err, users) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Users", users);
    res.send(users);
  });
};

// Retrieve a User by email
exports.getUserByEmail = (req, res) => {
  // console.log('get user by email');
  UserModel.getUserByEmail(req.params.email, (err, user) => {
    if (err) res.send(err);
    console.log("Single User data", user);
    res.send(user);
  });
};

// Create new User
exports.createNewUser = (req, res) => {
  const userReqData = new User(req.body);
  console.log("userReqData", userReqData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    UserModel.createUser(userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "User Created Successfully",
        data: user.insertEmail,
      });
    });
  }
};

// Update a User
exports.updateUser = (req, res) => {
  const userReqData = new User(req.body);
  console.log("userReqData update", userReqData);
  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    UserModel.updateUser(req.params.email, userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({ status: true, message: "User updated Successfully" });
    });
  }
};

// Delete a User with email
exports.deleteUser = (req, res) => {
  UserModel.deleteUser(req.params.email, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ success: true, message: "User deleted successfully" });
  });
};

// Delete all Users
exports.deleteAllUser = (req, res) => {
  UserModel.deleteAllUsers((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json({ success: true, message: "All Users deleted successfully" });
  });
};
