require('dotenv').config();
const express = require('express');
const app = express();
app.get('/api/tasks/health', (req, res) => res.json({ status: 'ok' }));
app.listen(3002, () => console.log('Task Service running on 3002'));
