const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'fallback_secret';
const expiresIn = process.env.JWT_EXPIRATION || '60s';

exports.generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};
