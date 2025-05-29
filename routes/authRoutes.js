const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/jwt');

// Тестовый login (просто по роли)
router.post('/token', (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ message: 'Role is required' });
  }

  const token = generateToken({ role, permissions: ['READ', 'WRITE'] });
  res.json({ token });
});

module.exports = router;
