const express = require('express');
const router = express.Router();

const userController = require('../controllers/registration.cont');

// get all users 
router.get('/', userController.getUserList);

//get user by email
router.get('/:email',userController.getUserByEmail);

//create new user
router.post('/', userController.createNewUser);

//update user 
router.put('/:email', userController.updateUser);

//delete user 
router.delete('/:email',userController.deleteUser);

module.exports = router;