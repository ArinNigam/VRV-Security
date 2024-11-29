import { create } from 'zustand';
import { AuthState, User } from '../types/auth';
import { findUserByEmail, saveUser } from '../utils/storage';
import { generateToken, setToken, removeToken, getUserFromToken } from '../utils/jwt';
import toast from 'react-hot-toast';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      toast.error('Invalid email or password');
      return;
    }

    try {
      const token = await generateToken(user);
      setToken(token);
      const { password: _, ...userWithoutPassword } = user;
      set({ user: userWithoutPassword, isAuthenticated: true });
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Authentication failed');
    }
  },
  signup: async (email: string, password: string, name: string, role: string) => {
    if (findUserByEmail(email)) {
      toast.error('Email already registered');
      return false;
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
      role: role as 'user' | 'admin' | 'moderator'
    };

    saveUser(newUser);
    toast.success('Account created successfully! Please log in.');
    return true;
  },
  logout: () => {
    removeToken();
    set({ user: null, isAuthenticated: false });
    toast.success('Logged out successfully');
  },
  initAuth: async () => {
    const user = await getUserFromToken();
    if (user) {
      set({ user, isAuthenticated: true });
    }
  }
}));