const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// ต้องมี auth เพื่อล็อค API นี้
router.get('/', auth, (req, res) => {
  res.json({ success: true, data: "Authorized Access Only" });
});
module.exports = router;
