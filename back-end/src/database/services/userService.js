const {User} = require('../models');
const md5 = require('md5');
const fs = require('fs');
const {sign,verify} = require('jsonwebtoken');

const SECRET = fs.readFileSync('../back-end/jwt.evaluation.key')

const loginUser = async (password , email) => {
    const user = await User.findOne({ where: { email },raw:true });
    if (!user || md5(password) !== user.password) {
        throw new Error();
    }
    const token = generateToken(user)

    return {...user,token};
}

const generateToken = (payload) => {

    const token =  sign({payload},SECRET,{
        algorithm:'HS256',
        expiresIn:'2h'
    })
    return token;
}



module.exports = {loginUser,verifyToken};
