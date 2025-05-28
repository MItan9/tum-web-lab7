// routes/plantRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/plantController');

// Пока без JWT (добавим позже)
router.get('/', controller.getAll);

module.exports = router;
