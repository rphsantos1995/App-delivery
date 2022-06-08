const { Router } = require('express');
const { getAll } = require('../controllers/ProductsController');

const router = Router();
const productRouter = router;

router.get('/', getAll);

module.exports = productRouter;
