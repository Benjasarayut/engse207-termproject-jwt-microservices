const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST || 'task-db',
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'task_db',
  user: process.env.DB_USER || 'task_user',
  password: process.env.DB_PASSWORD || 'task_secret',
});
async function initDB() {
  const fs = require('fs'); const path = require('path');
  const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
  await pool.query(sql); console.log('[task-db] Tables initialized');
}
module.exports = { pool, initDB };
