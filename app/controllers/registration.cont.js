const User = require("../models/registration.model.js");

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const user = new User({
        email: req.body.email,
        pw: req.body.pw,
        admin: req.body.admin
    });
    User.create(user, (err,data)=>{
        if(err)
            res.status(500).send({
                message:
                    err.message || "Error ocurred while creating the User."
            });
        else res.send(data);
    });
};

exports.findEmail = (req,res) => {
    User.findByEmail(req.params.email, (err, data) => {
        if(err) {
            if(err.kind == "not_found") {
                res.status(404).send({
                    message: `Not found User with email ${req.params.email}`
                });
            }else{
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.email
                });
            }
        }else res.send(data);
    });
};