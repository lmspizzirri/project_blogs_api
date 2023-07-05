const express = require('express');

const userController = require('../controllers/user.controller');
const { displayNameValidation, 
    emailValidation, 
    passwordValidation } = require('../middlewares/creatingFields');

const routers = express.Router();

routers.post(
    '/', 
    displayNameValidation, 
    emailValidation, 
    passwordValidation,  
    userController.createUser,
);

module.exports = routers;