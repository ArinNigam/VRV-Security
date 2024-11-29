import { create } from 'zustand';
import { AuthState, User } from '../types/auth';
import { findUserByEmail, saveUser, setCurrentUser, removeCurrentUser, getCurrentUser } from '../utils/storage';
import toast from 'react-hot-toast';

export const useAuthStore = create<AuthState>((set) => ({
  user: getCurrentUser(),
  isAuthenticated: !!getCurrentUser(),
  login: async (email: string, password: string) => {
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      toast.error('Invalid email or password');
      return;
    }

    setCurrentUser(user);
    set({ user, isAuthenticated: true });
    toast.success('Login successful!');
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
    removeCurrentUser();
    set({ user: null, isAuthenticated: false });
    toast.success('Logged out successfully');
  },
}));