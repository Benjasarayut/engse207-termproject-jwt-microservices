require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/tasks', require('./routes/tasks'));
app.listen(3002, () => console.log('[task-service] Secured and Running on 3002'));
