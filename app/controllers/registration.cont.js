
const User = require('../models/registration.model');
const UserModel = require('../models/registration.model');

//get all user list 
exports.getUserList = (req,res) =>{
    //console.log('here all user list');
    UserModel.getAllUsers((err,users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users);

    })
}

//get User by email
exports.getUserByEmail = (req,res) =>{
   // console.log('get user by email');
   UserModel.getUserByEmail(req.params.email, (err,user)=>{
        if(err)
        res.send(err);
        console.log('Single User data',user);
        res.send(user);
   })
}

//create new user 
exports.createNewUser = (req, res) =>{
    const userReqData = new User(req.body);
    console.log('userReqData', userReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid data');
        UserModel.createUser(userReqData,(err,user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully',data: user.insertEmail})
        })
    }
}

// update user 
exports.updateUser = (req,res)=>{
    const userReqData = new User(req.body);
    console.log('userReqData update', userReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid data');
        UserModel.updateUser(req.params.email,userReqData,(err,user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}

//delete user 
exports.deleteUser = (req,res) =>{
    UserModel.deleteUser(req.param.email, (err,user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: "User deleted successfully"});
    })
}
