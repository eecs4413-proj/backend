const e = require('express');
var dbConn = require('../config/db.config');

var User = function(user){
    this.email = user.email;
    this.pw = user.pw;
    this.admin = user.admin;
}

//get all users 
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM User',(err,res)=>{
        if(err){
            console.log('Error while fetching users',err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

//get user by email from DB
User.getUserByEmail = (email,result) =>{
    dbConn.query('SELECT * FROM User WHERE email=?',email,(err,res)=>{
        if(err){
            console.log('Error while fetching user by email',err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}

//Create new user 
User.createUser = (userData, result)=>{
    dbConn.query('INSERT INTO User SET ?', userData, (err,res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null,err);
        }else{
            console.log('User Created Successfully');
            result(null,res);
        }
    })
}

//update user 
User.updateUser = (email, userReqData, result)=>{
    dbConn.query("UPDATE User SET pw=?, admin=? WHERE email = ?", [userReqData.pw,userReqData.admin, email],(err,res)=>{
        if(err){
            console.log('Error while updating the record');
            result(null,err);
        }else{
            console.log("User Updated successfully");
            result(null,res);
        }
    })
}

//delete user 
User.deleteUser = (email,result)=>{
    dbConn.query('DELETE FROM User WHERE email=?',email,(err,res)=>{
        if(err){
            console.log('Error while deleting the user',err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}

module.exports = User;