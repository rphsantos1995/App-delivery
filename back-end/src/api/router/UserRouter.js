const { Router } = require('express');
const { login, listUsers } = require('../controllers/UserController');

const router = Router();
const userRouter = router;

router.post('/login', login);
router.get('/users', listUsers);

module.exports = userRouter;
