const express = require('express');

const userController = require('../controllers/user.controller');
const { displayNameValidation, 
    emailValidation, 
    passwordValidation } = require('../middlewares/creatingFields');
const { validateToken } = require('../middlewares/validateToken');

const routers = express.Router();

routers.get('/', validateToken, userController.getAll);
routers.post(
    '/', 
    displayNameValidation, 
    emailValidation, 
    passwordValidation,  
    userController.createUser,
);

module.exports = routers;