CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY, title VARCHAR(200) NOT NULL, status VARCHAR(20) DEFAULT 'TODO', owner_id VARCHAR(50) NOT NULL
);
INSERT INTO tasks (title, status, owner_id) VALUES ('Task 1', 'DONE', 'user-001'), ('Admin Task', 'TODO', 'user-admin') ON CONFLICT DO NOTHING;
