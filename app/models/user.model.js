var dbConn = require("../config/db.config");



module.exports = {
  //Create User
  create: (data, callBack) => {
    dbConn.query(`INSERT INTO User(email,pw,admin) values(?,?,?)`, [data.email,data.pw,data.admin],(error, results,fields)=>{
      if(error) {
        callBack(error)
      }
      return callBack(null,results);
    }
    );
  },
  //Retrieve All User
  getUsers: callBack => {
    dbConn.query(`SELECT * FROM User`,[],(error,results,fields) => {
      if(error){
        callBack(error);
      }
      return callBack(null,results);
    })
  },
  //Retrieve User by Email
  getUserByEmail: (email, callBack) => {
    dbConn.query(`SELECT * FROM User WHERE email = ?`,[email],
    (error,results,fields)=> {
      if(error){
        callBack(error);
      }
      return callBack(null,results[0]);
    });
  },

  //Update User 
  updateUser: (data, callBack)=> {
    dbConn.query(`UPDATE User SET pw=?, admin=? WHERE email =?`,[data.pw,data.admin,data.email], (error,results,fields)=> {
      if(error){
        callBack(error);
      }
      return callBack(null,results);
    })
  },

  deleteUser: (data,callBack) => {
    dbConn.query(
      `DELETE FROM User WHERE email=?`,
      [data.email],
      (error,results,fields)=>{
        if(error){
         return callBack(error);
        }
        return callBack(null,results[0]);
      }
    );
  },




};
