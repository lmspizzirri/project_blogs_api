const express = require('express');

const categoryController = require('../controllers/category.controller');
const { validateToken } = require('../middlewares/validateToken');
const { nameValidation } = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/', validateToken, categoryController.getAll);
router.post('/', validateToken, nameValidation, categoryController.createCategory);

module.exports = router;