const Admin = require("../models/admin.model");
const AdminModel = require("../models/admin.model");


//get all ip address
exports.getIpaddressList = (req,res) => {
    AdminModel.getAllIpaddresses((err,ipaddresses) => {
        if(err) res.send(err);
        res.send(ipaddresses);
    });
};

//create new ipaddress 
exports.createNewIpaddress = (req,res) => {
    const ipaddressReqData = new Admin(req.body);
    console.log("ipaddressReqData", ipaddressReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({
            success: false,
            message: "Please fill all fields"
        });
    }else{
        console.log("valid data");
        AdminModel.createIpaddress(ipaddressReqData, (err, ipaddress)=> {
            if(err) res.send(err);
            res.json({
                status:true,
                message: "Ipaddress created successfully",
                data: visitevent.insertipaddress,
            });
        });
    }
};

exports.deleteIpaddress = (req,res) => {
    AdminModel.deleteIpaddress(req.params.ipaddress, (err, ipaddress) => {
        if(err){
            res.send(err);
        }
        res.json({sucess: true, message: "Ipaddress deleted successfully"});
    });
};

exports.deleteAllIpaddress = (req, res)=> {
    AdminModel.deleteAllIpaddress((err,ipaddresses)=> {
        if(err) {
            res.send(err);
        }
        res.json({
            sucess: true,
            message: "All Ipaddress deleted successfully"
        });
    });
};