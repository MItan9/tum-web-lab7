
const express = require('express');
const router = express.Router();
const controller = require('../controllers/plantController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.patch('/:id/water', controller.water);
router.patch('/:id/favourite', controller.favourite);


module.exports = router;
