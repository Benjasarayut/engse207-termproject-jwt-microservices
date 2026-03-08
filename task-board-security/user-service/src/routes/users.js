const express = require('express'); const { pool } = require('../db/db');
const { requireAuth, requireRole } = require('../middleware/authMiddleware');
const router = express.Router();
router.get('/me', requireAuth, async (req, res) => {
  const result = await pool.query('SELECT * FROM user_profiles WHERE user_id = $1', [req.user.sub]);
  res.json({ user: result.rows[0] });
});
router.get('/', requireAuth, requireRole('admin'), async (req, res) => {
  const result = await pool.query('SELECT * FROM user_profiles');
  res.json({ users: result.rows });
});
router.get('/health', (req, res) => res.json({ status: 'ok' }));
module.exports = router;
