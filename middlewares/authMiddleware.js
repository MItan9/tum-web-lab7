const { verifyToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Bearer <token>
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // сохраняем payload (роль, права и т.д.)
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
