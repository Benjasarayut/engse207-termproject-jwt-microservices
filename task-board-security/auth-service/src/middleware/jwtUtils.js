const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';
function generateToken(payload) { return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); }
function verifyToken(token) { return jwt.verify(token, JWT_SECRET); }
module.exports = { generateToken, verifyToken };
