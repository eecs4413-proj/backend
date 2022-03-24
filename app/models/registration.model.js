const sql = require("./db.js")

//constructor 
const User = function(user) {
  this.email = user.email;
  this.pw = user.pw;
  this.admin = user.admin;
};

User.create = (newUser,result) =>{
  sql.query("INSERT INTO User SET ?",newUser, (err,res)=>{
    if(err){
      console.log("error: ",err);
      result(err,null);
      return;
    }
    console.log("created User: ", { id: res.insertEmail, ...newUser });
    result(null, { id: res.insertEmail, ...newUser });
  });
};

User.getAll = (email,result)=> {
  sql.query("SELECT * FROM User", (err,res) =>{
    if(err){
      console.log("error: ", err);
      result(null,err);
      return;
    }    
    console.log("users: ", res);
    result(null,res);
  });
  };

User.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM User WHERE email = ${email}`,(err,res) => {
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if(res.length){
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }
  });
};

module.exports = User;