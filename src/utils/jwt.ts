import { jwtDecode } from 'jwt-decode';
import { User } from '../types/auth';
import * as jose from 'jose';

const SECRET = new TextEncoder().encode('XVB9MF9xMmX0OeZfAbhLlDDBXBJjQ91HnpfuFQFiN8o=');

export const generateToken = async (user: User): Promise<string> => {
  const { password, ...userWithoutPassword } = user;
  
  const jwt = await new jose.SignJWT({ ...userWithoutPassword })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(SECRET);
    
  return jwt;
};

export const verifyToken = async (token: string): Promise<User | null> => {
  try {
    const { payload } = await jose.jwtVerify(token, SECRET);
    return payload as User;
  } catch {
    return null;
  }
};

export const setToken = (token: string) => {
  localStorage.setItem('jwt_token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('jwt_token');
};

export const removeToken = () => {
  localStorage.removeItem('jwt_token');
};

export const getUserFromToken = async (): Promise<User | null> => {
  const token = getToken();
  if (!token) return null;
  
  return await verifyToken(token);
};