const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const { sign } = require('jsonwebtoken');
const {
  StatusCodes:
  {
     CREATED, CONFLICT,
  } } = require('http-status-codes');
const { CONF } = require('../helpers/errorMessages');

const { User } = require('../../database/models');

  const SECRET = fs.readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'));

const generateToken = (payload) => {
  const token = sign({ payload }, SECRET, {
      algorithm: 'HS256',
      expiresIn: '2h',
  });
  return token;
};

const createUser = async (newName, newEmail, password) => {
    const user = await User.findOne({ where: { email: newEmail }, raw: true });
    
    if (user) return { status: CONFLICT, data: CONF };

    const hashPass = md5(password);
    const newUser = await User.create({ name: newName, 
      email: newEmail,
password: hashPass,
role: 'customer' });
   
    const { name, email, role } = newUser;
    const token = generateToken(newUser);
    return { status: CREATED, data: { name, email, role, token } };
};

module.exports = { createUser };
