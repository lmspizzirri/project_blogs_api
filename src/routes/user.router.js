const express = require('express');

const userController = require('../controllers/user.controller');
const { fieldsValidation } = require('../middlewares/checkingFields');

const routers = express.Router();

routers.post('/user', fieldsValidation, userController.loginUser);

module.exports = routers;