const userService = require('../services/user.service');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await userService.loginUser({ email, password });
    return res.status(type).json(message);
};

module.exports = { loginUser };