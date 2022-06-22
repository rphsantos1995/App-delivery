const { Router } = require('express');
const { create, read, readOne } = require('../controllers/SalesController');

const router = Router();
const salesRouter = router;

router.get('/', read);
router.get('/:id', readOne);
router.post('/', create);

module.exports = salesRouter;
