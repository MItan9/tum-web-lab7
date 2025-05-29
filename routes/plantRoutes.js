
const express = require('express');
const router = express.Router();
const controller = require('../controllers/plantController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, controller.getAll);
router.post('/', auth, controller.create);
router.delete('/:id', auth, controller.remove);
router.patch('/:id/water', auth, controller.water);
router.patch('/:id/favourite', auth, controller.favourite);


module.exports = router;
