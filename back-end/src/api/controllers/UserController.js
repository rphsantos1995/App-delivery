const {
    StatusCodes:
    {
        NOT_FOUND, OK, INTERNAL_SERVER_ERROR, UNAUTHORIZED,
    } } = require('http-status-codes');
const { loginUser } = require('../services/userService');
const { INTERNAL, NF } = require('../../database/helpers/errorMessages');

const login = async (req, res) => {
 try {
     const { email, password } = req.body;

     const user = await loginUser(password, email);

     if (!user) {
         return res.status(NOT_FOUND).json({ message: NF });
     }
     const { message } = user;
     if (message) {
         return res.status(UNAUTHORIZED).json({ message });
     }

     return res.status(OK).json(user);
 } catch (e) {
     return res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL });
 }
};

module.exports = { login };
