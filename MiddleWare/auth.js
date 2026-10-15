const jwt = require('jsonwebtoken');
const auth = require('../MiddleWare/auth');
module.exports = function (req, res, next) {
  // Get token from header
  const authHeader = req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key');
    req.user = decoded; // Attach user id to request
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};