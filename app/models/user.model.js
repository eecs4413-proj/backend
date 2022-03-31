var dbConn = require("../config/db.config");

module.exports = {
  //Create User
  create: (data, callBack) => {
    dbConn.query(
      `INSERT INTO User(email,pw,fname,lname,admin) values(?,?,?,?,?)`,
      [data.email, data.pw, data.fname, data.lname, data.admin],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //Retrieve All User
  getUsers: (callBack) => {
    dbConn.query(`SELECT * FROM User`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  //Retrieve User by Email
  getUserByEmail: (email, callBack) => {
    dbConn.query(
      `SELECT * FROM User WHERE email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  //Update User
  updateUser: (data, callBack) => {
    dbConn.query(
      `UPDATE User SET pw=?, fname=?, lname=?, admin=? WHERE email=?`,
      [data.pw, data.fname, data.lname, data.admin, data.email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (data, callBack) => {
    console.log("delete user email = " + data.email);
    dbConn.query(
      `DELETE FROM User WHERE email=?`,
      [data.email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, true);          // When data is deleted, results[0] is always false
        //return callBack(null, results[0]);  // Therefore, return message becomes failed even though it is successful
                                              // So return true instead of results[0]. (May need to be reviewed)
      }
    );
  },
};
