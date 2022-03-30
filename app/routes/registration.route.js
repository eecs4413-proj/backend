const { Router } = require("express");

module.exports = app => {
    const users = require("../controllers/registration.cont.js");
    var router = require("express").Router();

    var cors = require('cors');
    app.use(cors());
    
    //Create new User 
    router.post("/", users.create);

    //Retrieve a single User with email 
    router.get("/email",users.findEmail);
    app.use('/api/users',router);
};
