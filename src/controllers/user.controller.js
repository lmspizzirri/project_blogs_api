const userService = require('../services/user.service');

const getAll = async (req, res) => {
    const { type, message } = await userService.getAll();
    return res.status(type).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.getById(id);
    return res.status(type).json(message);
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await userService.loginUser({ email, password });
    return res.status(type).json(message);
};

const createUser = async (req, res) => {
    const user = req.body;
    const { type, message } = await userService.createUser(user);
    return res.status(type).json(message);
};

const deleteMe = async (req, res) => {
    const token = req.headers.authorization;
    const { type, message } = await userService.deleteMe(token);
    if (type) {
        return res.status(type).json(message);
    }
    return res.status(204).end();
};

module.exports = { loginUser, createUser, getAll, getById, deleteMe };