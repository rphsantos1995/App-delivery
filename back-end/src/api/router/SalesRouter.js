const { Router } = require('express');
const { create } = require('../controllers/SalesController');

const router = Router();
const userRouter = router;

router.post('/', create);

module.exports = userRouter;
