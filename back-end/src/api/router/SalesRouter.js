const { Router } = require('express');
const { create, read } = require('../controllers/SalesController');

const router = Router();
const userRouter = router;

router.get('/', read);
router.post('/', create);

module.exports = userRouter;
