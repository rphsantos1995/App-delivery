const {User} = require('../models/');
const md5 = require('md5');

const loginUser = async (password , email) => {
    const user = await User.findOne({ where: { email },raw:true });
    console.log(user);
    if (!user || md5(password) !== user.password) {
        throw new Error();
    }

    return user;
}

module.exports = {loginUser};
