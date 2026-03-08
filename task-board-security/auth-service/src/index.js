require('dotenv').config(); const express = require('express');
const { initDB } = require('./db/db'); const app = express();
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
initDB().then(() => app.listen(3001, () => console.log('[auth-service] Running')));
