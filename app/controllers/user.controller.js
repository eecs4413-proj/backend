const {create, getUserByEmail,getUsers,updateUser,deleteUser } = require("../models/user.model.js");
const UserModel = require("../models/user.model.js");

// Create new User
const {genSaltSync, hashSync,compareSync,compare} = require("bcrypt");
const {sign} = require("jsonwebtoken");

module.exports = {
  createUser: (req,res) => {
    const body =req.body;
    const salt = genSaltSync(10);
    body.pw = hashSync(body.pw,salt);
    create(body,(err,results) => {
      if(err){
        console.log(error);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection failed"
        });
      }
      return res.status(200).json({
        sucess: 1,
        data: results
      });
    });
  },
  getUserByEmail: (req,res) =>{
    const email = req.params.email;
    getUserByEmail(email,(err,results)=>{
      if(err){
        console.log(err);
        return;
      }
      if(!results){
        return res.json({
          sucess: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        sucess: 1,
        data:results
      });
    });
  },
  getUsers: (req,res)=>{
    getUsers((err,results)=>{
      if(err){
        console.log(err);
        return;
      }
      return res.json({
        sucess: 1,
        data: results
      });
    });
  },
  updateUsers: (req, res) =>{
    const body = req.body;
    const salt = genSaltSync(10);
    body.pw = hashSync(body.pw,salt);
    updateUser(body,(err, results)=>{
      if(err){
        console.log(err);
        return;
      }
      if(!results){
        return res.json({
          sucess:0,
          message: "Failed to Update User"
        })
      }
      return res.json({
        sucess: 1,
        message: "updated sucessfully"
      });
    });
  },
  deleteUser: (req, res)=> {
    const data = req.body;
    deleteUser(data, (err, results)=> {
      if(err){
        console.log(err);
        return;
      }
      if(!results){
        return res.json({
          success:0,
          message: "Record Not Found"
        });
      }
      return res.json({
        sucess: 1,
        message: "User Deleted Sucessfully"
      });
    });
  },
  login: (req,res) => {
    const body = req.body;
    getUserByEmail(body.email,(err,results)=>{
      if(err){
        console.log(err); 
      }
      if(!results){
        return res.json({
          sucess: 0,
          data: "Invalid email or password 1"
        });
      }
    
      console.log(body.pw);
      console.log(results.pw);
      
      let result = compareSync(body.pw,results.pw);
      console.log(result)
      if(result){
        results.pw = undefined;
        const jsontoken = sign({result: results},"eecs4413",{
          expiresIn: "1h"
        });
        return res.json({
          sucess: 1,
          message: "login sucessfully",
          token: jsontoken
        });
      }else{
        return res.json({
          sucess: 0,
          data: "Invalid email or password2"
        });
      }
    });
  }
  
};

