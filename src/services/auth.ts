import { db } from '../lib/db';
import { UserInput } from '../lib/validators';
import bcrypt from 'bcryptjs';
import { User } from '../types/auth';

export async function createUser(userData: UserInput): Promise<User | null> {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const id = crypto.randomUUID();

    await db.execute({
      sql: 'INSERT INTO users (id, email, name, password, role) VALUES (?, ?, ?, ?, ?)',
      args: [id, userData.email, userData.name, hashedPassword, userData.role],
    });

    return {
      id,
      email: userData.email,
      name: userData.name,
      role: userData.role,
    };
  } catch (error: any) {
    if (error.message.includes('UNIQUE constraint failed')) {
      throw new Error('Email already registered');
    }
    throw error;
  }
}

export async function verifyUser(email: string, password: string): Promise<User | null> {
  const result = await db.execute({
    sql: 'SELECT * FROM users WHERE email = ?',
    args: [email],
  });

  const user = result.rows[0];
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.password as string);
  if (!valid) return null;

  return {
    id: user.id as string,
    email: user.email as string,
    name: user.name as string,
    role: user.role as 'user' | 'admin' | 'moderator',
  };
}