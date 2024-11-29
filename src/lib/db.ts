import { createClient } from '@libsql/client';

export const db = createClient({
  url: 'file:local.db',
});

export function initializeDatabase() {
  return db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      role TEXT CHECK(role IN ('user', 'admin', 'moderator')) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}