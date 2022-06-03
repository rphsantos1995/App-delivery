const md5 = require('md5');
const fs = require('fs');
const { sign } = require('jsonwebtoken');
const { User } = require('../../database/models');

const SECRET = fs.readFileSync('../back-end/jwt.evaluation.key');

const generateToken = (payload) => {
    const token = sign({ payload }, SECRET, {
        algorithm: 'HS256',
        expiresIn: '2h',
    });
    return token;
};

const loginUser = async (password, email) => {
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user || md5(password) !== user.password) {
        throw new Error();
    }
    delete user.password;
    const token = generateToken(user);

    return { ...user, token };
};

module.exports = { loginUser };