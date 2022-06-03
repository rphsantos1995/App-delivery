const { Router } = require('express');
const { login } = require('../controllers/UserController');

const router = Router();
const userRouter = router;

router.post('/', login);

module.exports = userRouter;
