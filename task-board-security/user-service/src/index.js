require('dotenv').config(); const express = require('express');
const { initDB } = require('./db/db'); const userRoutes = require('./routes/users');
const app = express(); const PORT = 3003;
app.use(express.json()); app.use('/api/users', userRoutes);
async function start() { try { await initDB(); } catch(e) {} app.listen(PORT, () => console.log(`[user-service] on ${PORT}`)); }
start();
