const { Router } = require('express');
const { create } = require('../controllers/registerController');

const router = Router();
const registerRouter = router;

router.post('/', create);

module.exports = registerRouter;
