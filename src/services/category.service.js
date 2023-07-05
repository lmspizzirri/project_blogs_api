const { Category } = require('../models');

const getAll = async () => {
    const categories = await Category.findAll();
    return { type: 200, message: categories };
};

const createCategory = async (name) => {
    console.log(name);
    const newCategory = await Category.create({ name });
    return { type: 201, message: newCategory };
};

module.exports = { createCategory, getAll };