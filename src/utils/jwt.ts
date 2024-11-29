import { jwtDecode } from 'jwt-decode';
import { User } from '../types/auth';

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const decodeToken = (token: string): User | null => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};