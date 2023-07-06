const { User } = require('../models');
const { createToken, decodeToken } = require('../utils/JWT');

const getAll = async () => {
    const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
    return { type: 200, message: allUsers };
};

const getById = async (id) => {
    const user = await User.findOne({ 
        where: { id },
        attributes: { exclude: 'password' } });
    if (!user) {
        return { type: 404, message: { message: 'User does not exist' } };
    }
    return { type: 200, message: user };
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
        return { type: 400, message: { message: 'Invalid fields' } };
    }
    const payload = {
       id: user.id, 
    };
    const token = createToken(payload);
    return { type: 200, message: { token } };
};

const createUser = async (user) => {
    const { email } = user; 
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
        return { type: 409, message: { message: 'User already registered' } };
    }
    const newUser = await User.create(user);
    const payload = {
       id: newUser.id, 
    };
    const token = createToken(payload);
    return { type: 201, message: { token } };
};

const deleteMe = async (token) => {
    const { id } = decodeToken(token);
    await User.destroy({ where: { id } });
    return { type: 204 };
};

module.exports = { loginUser, createUser, getAll, getById, deleteMe };
