const { Router } = require('express');
const { create, read, readOne, updateStatus } = require('../controllers/SalesController');

const router = Router();
const salesRouter = router;

router.get('/', read);
router.get('/:id', readOne);
router.put('/:id', updateStatus);
router.post('/', create);

module.exports = salesRouter;
