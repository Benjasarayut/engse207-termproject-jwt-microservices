const express = require('express'); const bcrypt = require('bcryptjs');
const { pool } = require('../db/db'); const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM auth_users WHERE email = $1', [email.toLowerCase()]);
  const user = result.rows[0];
  if (user && await bcrypt.compare(password, user.password_hash)) {
    const token = jwt.sign({ sub: user.user_id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, user: { id: user.user_id, role: user.role } });
  }
  res.status(401).json({ error: 'Email หรือ Password ไม่ถูกต้อง' });
});
module.exports = router;
