var dbConn = require("../config/db.config");

var User = function (user) {
  this.email = user.email;
  this.pw = user.pw;
  this.admin = user.admin;
};

// Retrieve all Users
User.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM User", (err, res) => {
    if (err) {
      console.log("Error while fetching users", err);
      result(null, err);
    } else {
      console.log("Users fetched successfully");
      result(null, res);
    }
  });
};

// Retrieve User with email
User.getUserByEmail = (email, result) => {
  dbConn.query("SELECT * FROM User WHERE email=?", email, (err, res) => {
    if (err) {
      console.log("Error while fetching user by email", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Create new User
User.createUser = (userData, result) => {
  dbConn.query("INSERT INTO User SET ?", userData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("User Created Successfully");
      result(null, res);
    }
  });
};

// Update User
User.updateUser = (email, userReqData, result) => {
  dbConn.query(
    "UPDATE User SET pw=?, admin=? WHERE email = ?",
    [userReqData.pw, userReqData.admin, email],
    (err, res) => {
      if (err) {
        console.log("Error while updating the record");
        result(null, err);
      } else {
        console.log("User Updated successfully");
        result(null, res);
      }
    }
  );
};

// Delete a User with email
User.deleteUser = (email, result) => {
  dbConn.query("DELETE FROM User WHERE email=?", email, (err, res) => {
    if (err) {
      console.log("Error while deleting the user", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Delete all User
User.deleteAllUsers = (result) => {
  dbConn.query("DELETE FROM User", (err, res) => {
    if (err) {
      console.log("Error while deleting the user", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
