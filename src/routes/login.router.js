const express = require('express');

const userController = require('../controllers/user.controller');
const { fieldsValidation } = require('../middlewares/checkingFields');

const router = express.Router();

router.post('/', fieldsValidation, userController.loginUser);

module.exports = router;