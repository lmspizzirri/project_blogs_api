const { User } = require('../models');
const { createToken } = require('../utils/JWT');

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

module.exports = { loginUser };
