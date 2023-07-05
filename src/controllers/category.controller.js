const categoryService = require('../services/category.service');

const getAll = async (req, res) => {
    const { type, message } = await categoryService.getAll();
    return res.status(type).json(message);
};

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { type, message } = await categoryService.createCategory(name);
    return res.status(type).json(message);
};

module.exports = { createCategory, getAll };