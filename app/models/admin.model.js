const e = require ("express");
var dbConn = require("../config/db.config");

var Admin = function(admin) {
    this.ipaddress = admin.ipaddress;
};

//get all ipaddress 
Admin.getAllIpaddresses = (result) => {
    dbConn.query("SELECT * FROM VisitEvent", (err,res) => {
        if(err) {
            console.log("Error while fetching ipaddresses",err);
            result(null,err);
        }else {
            console.log("IpAddress fetched successfully");
            result(null,res);
        }
    });
};

//Create new IPAddress
Admin.createIpaddress = (ipaddressData, result) => {
    dbConn.query("INSERT INTO VisitEvent SET ?", ipaddressData, (err,res) => {
        if(err) {
            console.log("Error while inserting data");
            result(null,err);
        }else{
            console.log("Ipaddress created successfully");
        }
    });
};


//Delete a ipaddress 
Admin.deleteIpaddress = (ipaddress, result) => {
    dbConn.query("DELETE FROM VisitEvent WHERE ipaddress=?", bid, (err,res) => {
        if(err){
            console.log("Error while deleting ipaddress",err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
};

//Delete all Ipaddress
Admin.deleteAllIpaddress = (result) => {
    dbConn.query("DELETE FROM VisitEvent",(err,res)=> {
        if(err) {
            console.log("Error while deleting the ipaddress",err);
            result(null,err);
        }else {
            result(null,res);
        }
    });
};

module.exports = Admin;